import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollTheme from "@/components/ScrollTheme";
import Loader from "@/components/Loader";

const aspekta = localFont({
  src: "./fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  title: "The Draftory — A content team for founders",
  description:
    "We're a team of ghostwriters, strategists, and brand thinkers turning founders' raw ideas into a presence that gets noticed, remembered, and trusted.",
  metadataBase: new URL("https://thedraftory.com"),
  openGraph: {
    title: "The Draftory — A content team for founders",
    description:
      "Your ideas, drafted into words worth posting. We bring great writing to exceptional founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={aspekta.variable}>
      <body className="antialiased">
        <Loader />
        <div className="page-bg" id="page-bg" aria-hidden="true" />
        <ScrollTheme />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
