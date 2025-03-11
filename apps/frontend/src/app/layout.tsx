import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";

import _Layout from "@/components/layout";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Content Summarizer | Get Smart Summaries Instantly",
  description:
    "Transform any website content into concise, intelligent summaries with our AI-powered tool. Save time and extract key information efficiently.",
  keywords:
    "AI summarizer, content summary, website summary, AI tools, text summarization",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <_Layout>{children}</_Layout>
      </body>
    </html>
  );
};

export default RootLayout;
