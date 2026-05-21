import { describe, it, expect, vi, beforeEach } from "vitest";

const mockGetDocs = vi.fn();
const mockAddDoc = vi.fn();
const mockCollection = vi.fn().mockReturnValue("collection-ref");
const mockQuery = vi.fn().mockReturnValue("query-ref");
const mockWhere = vi.fn().mockReturnValue("where-clause");
const mockOrderBy = vi.fn().mockReturnValue("order-clause");
const mockServerTimestamp = vi.fn().mockReturnValue("SERVER_TIMESTAMP");

// Mutable auth object — tests mutate .currentUser directly
const mockAuth = { currentUser: null as { uid: string; email: string } | null };

vi.mock("@/lib/firebase/client", () => ({
  auth: mockAuth,
  db: {},
}));

vi.mock("firebase/firestore", () => ({
  getFirestore: vi.fn().mockReturnValue({}),
  collection: mockCollection,
  query: mockQuery,
  where: mockWhere,
  orderBy: mockOrderBy,
  getDocs: mockGetDocs,
  addDoc: mockAddDoc,
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

const validForm = {
  name: "Jane Doe",
  title: "Professor",
  company: "MIT",
  degree: "PhD Mathematics",
  gradYear: 2020,
  school: "Harvard",
  quote: "Math is everywhere.",
  fullStory: "A long story about mathematics and career.",
  tags: ["Academia", "Pure Math"],
};

describe("listApprovedStories", () => {
  beforeEach(() => vi.clearAllMocks());

  it("queries with status == approved filter", async () => {
    mockGetDocs.mockResolvedValueOnce({ docs: [] });

    const { listApprovedStories } = await import("@/lib/firebase/stories");
    const result = await listApprovedStories();

    expect(mockWhere).toHaveBeenCalledWith("status", "==", "approved");
    expect(result).toEqual([]);
  });

  it("maps Firestore docs to Story objects with id", async () => {
    const fakeDoc = {
      id: "doc-123",
      data: () => ({ name: "Priya", status: "approved", seedOrder: 0 }),
    };
    mockGetDocs.mockResolvedValueOnce({ docs: [fakeDoc] });

    const { listApprovedStories } = await import("@/lib/firebase/stories");
    const [story] = await listApprovedStories();

    expect(story.id).toBe("doc-123");
    expect(story.name).toBe("Priya");
  });
});

describe("submitStory", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockAuth.currentUser = null;
  });

  it("throws when no user is signed in", async () => {
    mockAuth.currentUser = null;
    const { submitStory } = await import("@/lib/firebase/stories");
    await expect(submitStory(validForm)).rejects.toThrow("Must be signed in");
  });

  it("writes a doc with status pending and submittedBy = uid", async () => {
    mockAuth.currentUser = { uid: "u42", email: "a@b.com" };
    mockAddDoc.mockResolvedValueOnce({ id: "new-story-id" });

    const { submitStory } = await import("@/lib/firebase/stories");
    const id = await submitStory(validForm);

    expect(id).toBe("new-story-id");
    const written = mockAddDoc.mock.calls[0][1];
    expect(written.status).toBe("pending");
    expect(written.submittedBy).toBe("u42");
    expect(written.submittedByEmail).toBe("a@b.com");
  });

  it("derives imageInitials from the name", async () => {
    mockAuth.currentUser = { uid: "u1", email: "x@y.com" };
    mockAddDoc.mockResolvedValueOnce({ id: "x" });

    const { submitStory } = await import("@/lib/firebase/stories");
    await submitStory({ ...validForm, name: "Jane Doe" });

    const written = mockAddDoc.mock.calls[0][1];
    expect(written.imageInitials).toBe("JD");
  });

  it("does not allow caller to set status to approved", async () => {
    mockAuth.currentUser = { uid: "u1", email: "x@y.com" };
    mockAddDoc.mockResolvedValueOnce({ id: "x" });

    const { submitStory } = await import("@/lib/firebase/stories");
    await submitStory(validForm);

    const written = mockAddDoc.mock.calls[0][1];
    expect(written.status).not.toBe("approved");
  });
});
