import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./client";
import { auth } from "./client";

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
  status: "pending" | "approved";
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

export async function submitStory(data: StoryFormData): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error("Must be signed in to submit a story.");

  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const accentColors = ["indigo", "violet", "cyan", "amber", "emerald", "rose"];
  const accentColor = accentColors[Math.floor(Math.random() * accentColors.length)];

  const ref = await addDoc(collection(db, "stories"), {
    ...data,
    imageInitials: initials,
    accentColor,
    status: "pending",
    submittedBy: user.uid,
    submittedByEmail: user.email,
    submittedAt: serverTimestamp(),
  });

  return ref.id;
}
