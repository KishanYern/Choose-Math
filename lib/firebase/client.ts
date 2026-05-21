import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Guard against SSR / build environments where env vars aren't present.
// Firebase is only used in client components; these singletons are always
// accessed after hydration, so the null! casts are safe.
const hasConfig = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const app: FirebaseApp = hasConfig
  ? (getApps().length ? getApps()[0] : initializeApp(firebaseConfig))
  : (null as unknown as FirebaseApp);

export const auth: Auth = hasConfig ? getAuth(app) : (null as unknown as Auth);
export const db: Firestore = hasConfig ? getFirestore(app) : (null as unknown as Firestore);
