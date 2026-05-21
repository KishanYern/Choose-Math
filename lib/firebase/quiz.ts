import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./client";
import { auth } from "./client";
import type { ExperienceLevel, ResultType } from "@/data/quiz";

export interface QuizHistoryEntry {
  id: string;
  level: ExperienceLevel;
  resultType: ResultType;
  resultTitle: string;
  scoredAt: Date;
}

export async function saveQuizResult(params: {
  level: ExperienceLevel;
  resultType: ResultType;
  resultTitle: string;
}): Promise<void> {
  const user = auth.currentUser;
  if (!user) return; // silent no-op for anonymous users

  await addDoc(collection(db, "users", user.uid, "quizResults"), {
    ...params,
    scoredAt: serverTimestamp(),
  });
}

export async function listMyQuizResults(): Promise<QuizHistoryEntry[]> {
  const user = auth.currentUser;
  if (!user) return [];

  const q = query(
    collection(db, "users", user.uid, "quizResults"),
    orderBy("scoredAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      level: data.level,
      resultType: data.resultType,
      resultTitle: data.resultTitle,
      scoredAt: data.scoredAt?.toDate() ?? new Date(),
    };
  });
}
