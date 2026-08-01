import type { Metadata } from "next";
import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service — The Draftory" },
  description:
    "The terms that govern your use of The Draftory website and services.",
  robots: { index: false },
};

const sections = [
  {
    heading: "Acceptance",
    body: [
      "By using this site, you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "Services",
    body: [
      "The Draftory creates content for founders and executives. Submitting the contact form does not create a service obligation. An engagement begins only upon a written contract.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All site content is owned by The Draftory and protected under Indian and international copyright law. Work created for clients under a paid engagement is governed by the applicable client contract.",
    ],
  },
  {
    heading: "Conduct",
    body: [
      "You agree not to misuse the site, submit false information, or violate any applicable law. We reserve the right to refuse service at our discretion.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "The site is provided as-is. We make no warranties about its accuracy, availability, or fitness for any purpose.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "To the extent permitted by Indian law, The Draftory is not liable for indirect or consequential damages. Our total liability shall not exceed amounts paid by you in the preceding six months.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by Indian law. Disputes will first be addressed through good-faith negotiation. If unresolved, they will be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat in New Delhi.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms at any time. Continued use of the site constitutes acceptance.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions? Email navya@thedraftory.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="shell flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="text-[1.875rem] text-white">
            <Wordmark />
          </Link>
          <BackButton />
        </div>
      </header>

      <div className="shell pb-28 pt-36 md:pb-40 md:pt-44">
        <div className="max-w-2xl">
          <h1 className="display display-lg text-white">Terms of Service</h1>
          <p className="mt-6 text-base text-white/45">Effective date: June 26, 2025</p>

          <div className="mt-16 flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-4 text-xl font-[500] tracking-[-0.01em] text-white">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-lg leading-relaxed text-white/60">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/35">
            <p>
              Also see our{" "}
              <Link href="/privacy" className="text-white/60 underline underline-offset-4 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
