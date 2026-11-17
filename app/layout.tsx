import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharanish | AI & Machine Learning Engineer",
  description:
    "Portfolio of Dharanish, an AI & Machine Learning Engineer building practical AI systems across Edge AI, Local LLMs, RAG applications, Computer Vision, and Full Stack AI products.",
  keywords: [
    "Dharanish",
    "AI Engineer",
    "Machine Learning Engineer",
    "Edge AI",
    "Local LLMs",
    "RAG",
    "Computer Vision",
    "AI Portfolio",
    "Full Stack AI Developer",
  ],
  openGraph: {
    title: "Dharanish | AI & Machine Learning Engineer",
    description:
      "Portfolio of Dharanish, an AI & Machine Learning Engineer building practical AI systems across Edge AI, Local LLMs, RAG applications, Computer Vision, and Full Stack AI products.",
    type: "website",
    siteName: "Dharanish Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Dharanish | AI & Machine Learning Engineer",
    description:
      "AI & Machine Learning Engineer building practical AI systems across Edge AI, Local LLMs, RAG, and Computer Vision.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
