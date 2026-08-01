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
    heading: "Acceptance of terms",
    body: [
      "By accessing or using thedraftory.com (the 'Site'), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.",
      "These terms apply to all visitors, users, and others who access or use the Site.",
    ],
  },
  {
    heading: "About our services",
    body: [
      "The Draftory provides content creation services for founders and executives, including but not limited to: ghostwritten LinkedIn posts, essays, newsletters, founder blogs, and long-form thought leadership content.",
      "Use of this Site, including submitting our contact form, does not constitute a binding service agreement. An engagement begins only upon execution of a written contract between you and The Draftory.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this Site — including text, graphics, logos, and design — is the property of The Draftory and is protected under applicable Indian and international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our written permission.",
      "Content we create for clients as part of a paid engagement is governed by the terms of the applicable client contract, which typically assigns full ownership to the client upon receipt of payment.",
    ],
  },
  {
    heading: "User conduct",
    body: [
      "You agree not to use the Site to: submit false or misleading information; attempt to gain unauthorised access to any part of the Site or its underlying systems; engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site; or violate any applicable law or regulation.",
      "We reserve the right to refuse service, terminate access, or remove content at our sole discretion.",
    ],
  },
  {
    heading: "Contact form submissions",
    body: [
      "Information submitted via our contact form is used to evaluate whether we can work together. Submitting the form does not guarantee a response, create a service obligation, or establish a business relationship.",
      "By submitting the form, you confirm that the information provided is accurate and that you have the authority to engage on behalf of any company you represent.",
    ],
  },
  {
    heading: "Newsletter and communications",
    body: [
      "If you subscribe to our newsletter, you consent to receive occasional emails from The Draftory on topics related to founder content, writing, and brand presence. We send infrequently and only content we consider worth reading.",
      "You can unsubscribe at any time via the link in any email, or by contacting us directly at navya@thedraftory.com.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "The Site may contain links to third-party websites. These are provided for convenience only. We do not endorse, control, or take responsibility for the content or practices of any linked sites.",
    ],
  },
  {
    heading: "Disclaimer of warranties",
    body: [
      "The Site is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "We make no representations about the accuracy or completeness of any information on the Site.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by applicable Indian law, The Draftory shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site.",
      "Our total liability to you for any cause of action shall not exceed the amount paid by you to us, if any, in the six months preceding the event giving rise to the claim.",
    ],
  },
  {
    heading: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless The Draftory and its team members from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of the Site or violation of these Terms.",
    ],
  },
  {
    heading: "Governing law and disputes",
    body: [
      "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If a dispute cannot be resolved amicably within 30 days, it shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India). The seat of arbitration shall be New Delhi, India, and proceedings shall be conducted in English.",
      "For matters not subject to arbitration, the courts at New Delhi, India shall have exclusive jurisdiction.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms. The effective date at the top of this page reflects when the Terms were last updated.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these Terms? Email us at navya@thedraftory.com. We're a small team and we respond to everything.",
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
          <p className="eyebrow mb-6 text-white/45">Legal</p>
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
