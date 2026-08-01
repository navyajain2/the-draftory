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
      "The Draftory is a content studio for founders and executives. We create ghostwritten content — LinkedIn posts, essays, newsletters, and long-form thought leadership — on behalf of our clients. Our website is located at thedraftory.com.",
      "When we say 'we', 'us', or 'our', we mean The Draftory. When we say 'you', we mean any person visiting this site or submitting information through our contact form.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect information you give us directly. When you fill out our contact form, we collect your name, email address, job title, company name, LinkedIn URL, company website, the category of your business, a description of your product, your company size, the type of work you're looking for, your content goals, how you heard about us, your country, and any referral details you choose to share.",
      "We also collect standard usage data automatically — things like your IP address, browser type, pages visited, and time spent on each page. This is collected via analytics tools to help us understand how the site is used.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "Contact form data is used solely to respond to your inquiry, understand your project needs, and determine whether we're a good fit to work together. We do not sell this information to third parties, ever.",
      "If you opt in to our newsletter via the contact form or the newsletter signup, we'll occasionally send you founder-focused writing on content, presence, and trust. You can unsubscribe at any time.",
      "Usage data helps us improve the site — understanding which pages are read most and where people drop off.",
    ],
  },
  {
    heading: "Who we share data with",
    body: [
      "We use Formspree to process contact form submissions. Your form data is transmitted to Formspree's servers and forwarded to our inbox. You can read Formspree's privacy policy at formspree.io/legal/privacy-policy.",
      "We may use analytics tools such as Google Analytics or Plausible to understand site traffic. These tools may set cookies or use fingerprinting to track page visits in aggregate.",
      "We do not share your personal information with any other third parties unless required by law.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain contact form submissions for as long as the business relationship is active or potentially active. If you ask us to delete your data, we will do so within 30 days.",
      "Newsletter subscription data is retained until you unsubscribe.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This site may use cookies for analytics purposes. We do not use cookies for advertising or cross-site tracking. You can disable cookies in your browser settings without affecting your ability to browse the site.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You have the right to access, correct, or delete any personal information we hold about you. You may also object to or restrict how we process your data.",
      "To exercise any of these rights, email us at navya@thedraftory.com. We will respond within 30 days.",
      "This policy is governed by the Digital Personal Data Protection Act, 2023 (India). If you believe your data rights have been violated, you may raise a complaint with the Data Protection Board of India.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "Our services are not directed to anyone under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we do, we'll update the effective date at the top of this page. We encourage you to review it periodically.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy? Write to us at navya@thedraftory.com. We're a small team and we read everything.",
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
          <p className="eyebrow mb-6 text-white/45">Legal</p>
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
