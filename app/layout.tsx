import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Alex Morgan | Full Stack Developer",
  description: "Full Stack Developer specializing in MERN Stack, Next.js, and modern web technologies. Building scalable, performant, and beautiful web applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "MERN Stack", "TypeScript", "Web Developer"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack, Next.js, and modern web technologies.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack, Next.js, and modern web technologies.",
    creator: "@alexmorgandev",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0F1E" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F8FAFC" media="(prefers-color-scheme: light)" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
