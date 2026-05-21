import { describe, it, expect, vi, beforeEach } from "vitest";

const mockSignInWithPopup = vi.fn();
const mockFirebaseSignOut = vi.fn();
const mockOnAuthStateChanged = vi.fn();
const mockGoogleProvider = {};

vi.mock("firebase/auth", () => ({
  GoogleAuthProvider: vi.fn().mockImplementation(() => mockGoogleProvider),
  signInWithPopup: mockSignInWithPopup,
  signOut: mockFirebaseSignOut,
  onAuthStateChanged: mockOnAuthStateChanged,
  getAuth: vi.fn().mockReturnValue({}),
}));

vi.mock("firebase/app", () => ({
  initializeApp: vi.fn().mockReturnValue({}),
  getApps: vi.fn().mockReturnValue([{}]),
}));

vi.mock("firebase/firestore", () => ({
  getFirestore: vi.fn().mockReturnValue({}),
}));

vi.mock("@/lib/firebase/client", () => ({
  auth: {},
  db: {},
}));

describe("signInWithGoogle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls signInWithPopup with a GoogleAuthProvider", async () => {
    const fakeUser = { uid: "u1", email: "a@b.com" };
    mockSignInWithPopup.mockResolvedValueOnce({ user: fakeUser });

    const { signInWithGoogle } = await import("@/lib/firebase/auth");
    const user = await signInWithGoogle();

    expect(mockSignInWithPopup).toHaveBeenCalledTimes(1);
    expect(user).toBe(fakeUser);
  });

  it("propagates errors from signInWithPopup", async () => {
    mockSignInWithPopup.mockRejectedValueOnce(new Error("popup closed"));

    const { signInWithGoogle } = await import("@/lib/firebase/auth");
    await expect(signInWithGoogle()).rejects.toThrow("popup closed");
  });
});

describe("signOut", () => {
  it("calls firebase signOut", async () => {
    mockFirebaseSignOut.mockResolvedValueOnce(undefined);

    const { signOut } = await import("@/lib/firebase/auth");
    await signOut();

    expect(mockFirebaseSignOut).toHaveBeenCalledTimes(1);
  });
});

describe("onAuthChanged", () => {
  it("subscribes to auth state changes and returns unsubscribe", async () => {
    const unsubscribe = vi.fn();
    mockOnAuthStateChanged.mockReturnValueOnce(unsubscribe);

    const { onAuthChanged } = await import("@/lib/firebase/auth");
    const cb = vi.fn();
    const unsub = onAuthChanged(cb);

    expect(mockOnAuthStateChanged).toHaveBeenCalledWith(expect.anything(), cb);
    expect(unsub).toBe(unsubscribe);
  });
});
