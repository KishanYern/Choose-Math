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
  if (q.length < 2) {
    return NextResponse.json(
      { error: "Query must be at least 2 characters" },
      { status: 400 },
    );
  }

  const params = new URLSearchParams({
    api_key: apiKey,
    _fields: FIELDS,
    "school.degrees_awarded.predominant": "3",
    per_page: "20",
    sort: "school.name:asc",
  });

  const upper = q.toUpperCase();
  if (US_STATES.has(upper)) {
    params.set("school.state", upper);
  } else {
    params.set("school.name", q);
  }

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
