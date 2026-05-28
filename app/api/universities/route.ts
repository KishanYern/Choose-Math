import { NextRequest, NextResponse } from "next/server";
import type { University } from "@/types/university";

const SCORECARD_URL =
  "https://api.data.gov/ed/collegescorecard/v1/schools.json";

const FIELDS = [
  "id",
  "school.name",
  "school.city",
  "school.state",
  "school.school_url",
  "latest.student.size",
  "latest.admissions.admission_rate.overall",
  "latest.admissions.sat_scores.average.overall",
].join(",");

const US_STATES = new Set([
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
]);

function normalizeUrl(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export async function GET(request: NextRequest) {
  const apiKey = process.env.SCORECARD_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const stateParam = request.nextUrl.searchParams.get("state")?.trim().toUpperCase() ?? "";
  const cityParam = request.nextUrl.searchParams.get("city")?.trim() ?? "";

  const hasName = q.length >= 2;
  const hasState = US_STATES.has(stateParam);
  const hasCity = cityParam.length >= 2;

  if (!hasName && !hasState && !hasCity) {
    return NextResponse.json(
      { error: "Provide a name query, state, or city filter" },
      { status: 400 },
    );
  }

  const params = new URLSearchParams({
    api_key: apiKey,
    _fields: FIELDS,
    "school.degrees_awarded.predominant": "3",
    per_page: "100",
    sort: "school.name:asc",
  });

  if (hasState) params.set("school.state", stateParam);
  if (hasCity) params.set("school.city", cityParam);
  if (hasName) params.set("school.name", q);

  try {
    const res = await fetch(`${SCORECARD_URL}?${params.toString()}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream API error" },
        { status: 502 },
      );
    }

    const data = await res.json();
    const results: University[] = (data.results ?? []).map(
      (r: Record<string, unknown>) => ({
        id: r.id as number,
        name: (r["school.name"] as string) ?? "Unknown",
        city: (r["school.city"] as string) ?? "",
        state: (r["school.state"] as string) ?? "",
        url: normalizeUrl(r["school.school_url"] as string | null),
        size: (r["latest.student.size"] as number) ?? null,
        admissionRate:
          typeof r["latest.admissions.admission_rate.overall"] === "number"
            ? r["latest.admissions.admission_rate.overall"]
            : null,
        satAvg:
          typeof r["latest.admissions.sat_scores.average.overall"] === "number"
            ? r["latest.admissions.sat_scores.average.overall"]
            : null,
      }),
    );

    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 502 },
    );
  }
}
