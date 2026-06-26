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
  title: {
    default: "Content for Founders | The Draftory",
    template: "%s | The Draftory",
  },
  description:
    "The Draftory is a ghostwriting studio for founders and executives. We turn your raw ideas into LinkedIn posts, essays, and newsletters that build trust and get remembered.",
  metadataBase: new URL("https://thedraftory.com"),
  keywords: [
    "founder ghostwriter",
    "ghostwriting for founders",
    "LinkedIn ghostwriting",
    "founder personal brand",
    "thought leadership ghostwriting",
    "executive ghostwriting",
    "founder content strategy",
    "ghostwriter for startups",
    "YC founder ghostwriter",
    "startup founder content",
  ],
  authors: [{ name: "The Draftory", url: "https://thedraftory.com" }],
  creator: "The Draftory",
  openGraph: {
    title: "Content for Founders | The Draftory",
    description:
      "We turn founders' raw ideas into LinkedIn posts, essays, and newsletters that build trust and get remembered. A small roster, on purpose.",
    type: "website",
    url: "https://thedraftory.com",
    siteName: "The Draftory",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content for Founders | The Draftory",
    description:
      "We turn founders' raw ideas into writing that builds trust. LinkedIn, essays, newsletters.",
    creator: "@thedraftory",
  },
  alternates: {
    canonical: "https://thedraftory.com",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
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
