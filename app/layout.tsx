import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Fraunces, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

// Newsreader retained for legacy components that still reference it.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "ChooseMath — Is Mathematics the Right Career for You?",
    template: "%s | ChooseMath",
  },
  description:
    "Explore mathematics careers, top programs, alumni stories, and a personalized quiz to discover where a math degree can take you — from quantitative finance to AI research.",
  keywords: [
    "mathematics careers",
    "math degree",
    "applied mathematics",
    "quantitative finance",
    "data science",
    "actuarial science",
    "mathematics programs",
    "math major",
  ],
  openGraph: {
    title: "ChooseMath — Is Mathematics the Right Career for You?",
    description:
      "Discover what a mathematics degree can do for your career. Take our quiz, explore paths, and find your direction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink flex flex-col min-h-screen antialiased">
        <ThemeProvider>
          <AuthProvider>
            <Nav />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
