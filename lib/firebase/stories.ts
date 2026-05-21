import {
  collection,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./client";
import { auth } from "./client";
import { withRateLimit } from "./rateLimit";

export { RateLimitError } from "./rateLimit";

export interface Story {
  id: string;
  name: string;
  title: string;
  company: string;
  degree: string;
  gradYear: number;
  school: string;
  quote: string;
  fullStory: string;
  tags: string[];
  imageInitials: string;
  accentColor: string;
  status?: "pending" | "approved";
  submittedBy?: string;
  submittedByEmail?: string;
  seedOrder?: number;
}

export type StoryFormData = Pick<
  Story,
  "name" | "title" | "company" | "degree" | "gradYear" | "school" | "quote" | "fullStory" | "tags"
>;

export async function listApprovedStories(): Promise<Story[]> {
  const q = query(
    collection(db, "stories"),
    where("status", "==", "approved"),
    orderBy("seedOrder", "asc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Story));
}

function normalizeStoryData(data: StoryFormData): StoryFormData {
  return {
    name: data.name.trim(),
    title: data.title.trim(),
    company: data.company.trim(),
    degree: data.degree.trim(),
    gradYear: data.gradYear,
    school: data.school.trim(),
    quote: data.quote.trim(),
    fullStory: data.fullStory.trim(),
    tags: [...new Set(
      data.tags.map((t) => t.trim().toLowerCase()).filter((t) => t.length > 0)
    )].slice(0, 5),
  };
}

const ACCENT_COLORS = ["indigo", "violet", "cyan", "amber", "emerald", "rose"] as const;

export async function submitStory(data: StoryFormData): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error("Must be signed in to submit a story.");

  const clean = normalizeStoryData(data);

  const requiredFields = ["name", "title", "company", "degree", "school", "quote", "fullStory"] as const;
  for (const field of requiredFields) {
    if (!clean[field]) throw new Error(`${field} is required.`);
  }

  const initials = clean.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const accentColor = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
  const newRef = doc(collection(db, "stories"));

  await withRateLimit(user.uid, "storiesToday", (tx) => {
    tx.set(newRef, {
      ...clean,
      imageInitials: initials,
      accentColor,
      status: "pending",
      submittedBy: user.uid,
      submittedByEmail: user.email,
      submittedAt: serverTimestamp(),
    });
  });

  return newRef.id;
}
