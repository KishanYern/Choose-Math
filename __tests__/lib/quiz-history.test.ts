import { describe, it, expect, vi, beforeEach } from "vitest";

const mockAddDoc = vi.fn();
const mockGetDocs = vi.fn();
const mockCollection = vi.fn().mockReturnValue("col-ref");
const mockQuery = vi.fn().mockReturnValue("query-ref");
const mockOrderBy = vi.fn().mockReturnValue("order-clause");
const mockServerTimestamp = vi.fn().mockReturnValue("SERVER_TIMESTAMP");

// Mutable auth object — tests mutate .currentUser directly
const mockAuth = { currentUser: null as { uid: string } | null };

vi.mock("@/lib/firebase/client", () => ({
  auth: mockAuth,
  db: {},
}));

vi.mock("firebase/firestore", () => ({
  getFirestore: vi.fn().mockReturnValue({}),
  collection: mockCollection,
  query: mockQuery,
  orderBy: mockOrderBy,
  addDoc: mockAddDoc,
  getDocs: mockGetDocs,
  serverTimestamp: mockServerTimestamp,
}));

vi.mock("firebase/app", () => ({
  initializeApp: vi.fn().mockReturnValue({}),
  getApps: vi.fn().mockReturnValue([{}]),
}));

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn().mockReturnValue(mockAuth),
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
}));

const params = { level: "advanced" as const, resultType: "pure-math" as const, resultTitle: "Pure Mathematics" };

describe("saveQuizResult", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockAuth.currentUser = null;
  });

  it("is a no-op when signed out", async () => {
    mockAuth.currentUser = null;
    const { saveQuizResult } = await import("@/lib/firebase/quiz");
    await saveQuizResult(params);
    expect(mockAddDoc).not.toHaveBeenCalled();
  });

  it("writes under users/{uid}/quizResults when signed in", async () => {
    mockAuth.currentUser = { uid: "u99" };
    mockAddDoc.mockResolvedValueOnce({ id: "qr-1" });

    const { saveQuizResult } = await import("@/lib/firebase/quiz");
    await saveQuizResult(params);

    expect(mockCollection).toHaveBeenCalledWith(expect.anything(), "users", "u99", "quizResults");
    const written = mockAddDoc.mock.calls[0][1];
    expect(written.resultType).toBe("pure-math");
    expect(written.resultTitle).toBe("Pure Mathematics");
    expect(written.level).toBe("advanced");
    expect(written.scoredAt).toBe("SERVER_TIMESTAMP");
  });
});

describe("listMyQuizResults", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockAuth.currentUser = null;
  });

  it("returns empty array when signed out", async () => {
    mockAuth.currentUser = null;
    const { listMyQuizResults } = await import("@/lib/firebase/quiz");
    const results = await listMyQuizResults();
    expect(results).toEqual([]);
    expect(mockGetDocs).not.toHaveBeenCalled();
  });

  it("queries the correct path and maps docs", async () => {
    const fakeDate = new Date("2026-01-01");
    mockAuth.currentUser = { uid: "u1" };

    const fakeDoc = {
      id: "r1",
      data: () => ({
        level: "beginner",
        resultType: "actuarial",
        resultTitle: "Actuarial Science",
        scoredAt: { toDate: () => fakeDate },
      }),
    };
    mockGetDocs.mockResolvedValueOnce({ docs: [fakeDoc] });

    const { listMyQuizResults } = await import("@/lib/firebase/quiz");
    const [entry] = await listMyQuizResults();

    expect(entry.id).toBe("r1");
    expect(entry.resultType).toBe("actuarial");
    expect(entry.scoredAt).toBe(fakeDate);
  });
});
