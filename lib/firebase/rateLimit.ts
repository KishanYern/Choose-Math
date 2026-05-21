import { doc, runTransaction, Transaction } from "firebase/firestore";
import { db } from "./client";

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
  }
}

function utcDayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

type RateLimitField = "storiesToday" | "quizzesToday";

const CAPS: Record<RateLimitField, number> = {
  storiesToday: 3,
  quizzesToday: 20,
};

const LIMIT_MESSAGES: Record<RateLimitField, string> = {
  storiesToday: "You've reached today's story submission limit (3/day). Try again tomorrow.",
  quizzesToday: "You've reached today's quiz save limit. Try again tomorrow.",
};

/**
 * Runs `writeFn` inside a Firestore transaction that enforces a daily per-user
 * rate limit. Throws RateLimitError if the cap is reached for today.
 */
export async function withRateLimit(
  uid: string,
  field: RateLimitField,
  writeFn: (tx: Transaction) => void
): Promise<void> {
  const counterRef = doc(db, "rateLimits", uid);
  const cap = CAPS[field];
  const today = utcDayKey();

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(counterRef);

    let storiesToday = 0;
    let quizzesToday = 0;

    if (snap.exists() && snap.data().dayKey === today) {
      storiesToday = snap.data().storiesToday ?? 0;
      quizzesToday = snap.data().quizzesToday ?? 0;
    }

    const current = field === "storiesToday" ? storiesToday : quizzesToday;
    if (current >= cap) {
      throw new RateLimitError(LIMIT_MESSAGES[field]);
    }

    tx.set(counterRef, {
      storiesToday: field === "storiesToday" ? storiesToday + 1 : storiesToday,
      quizzesToday: field === "quizzesToday" ? quizzesToday + 1 : quizzesToday,
      dayKey: today,
    });

    writeFn(tx);
  });
}
