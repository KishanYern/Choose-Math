import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

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
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink flex flex-col min-h-screen antialiased dot-grid">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
