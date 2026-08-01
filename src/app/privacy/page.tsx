import type { Metadata } from "next";
import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — The Draftory" },
  description:
    "How The Draftory collects, uses, and protects your personal information.",
  robots: { index: false },
};

const sections = [
  {
    heading: "Who we are",
    body: [
      "The Draftory is a content studio for founders and executives based in India. Our website is thedraftory.com.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you submit our contact form, we collect the details you provide: name, email, company, job title, and project information. We also collect basic usage data (pages visited, browser type) via analytics.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Form data is used only to respond to your inquiry and assess fit. We do not sell your information. If you opted into our newsletter, we will send occasional founder-focused emails. You can unsubscribe any time.",
    ],
  },
  {
    heading: "Third parties",
    body: [
      "We use Formspree to process form submissions and may use analytics tools such as Google Analytics. We do not share your data with anyone else unless required by law.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can request access to, correction of, or deletion of your data at any time by emailing navya@thedraftory.com. We will respond within 30 days. This policy is governed by the Digital Personal Data Protection Act, 2023 (India).",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update this policy occasionally. The effective date above reflects the latest revision.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions? Email navya@thedraftory.com.",
    ],
  },
];

export default function PrivacyPage() {
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
          <h1 className="display display-lg text-white">Privacy Policy</h1>
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
              <Link href="/terms" className="text-white/60 underline underline-offset-4 hover:text-white transition-colors">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
