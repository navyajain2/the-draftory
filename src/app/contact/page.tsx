import type { Metadata } from "next";
import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact | The Draftory" },
  description:
    "Tell us about you and your work. A few questions to get a feel for your story, only the first three are required.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* minimal header — wordmark links home, close returns home */}
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="shell flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="text-[1.875rem] text-white">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="rule-link cursor-pointer text-lg tracking-[-0.01em] text-white"
          >
            Close
          </Link>
        </div>
      </header>

      <div className="shell pb-28 pt-36 md:pb-40 md:pt-44">
        <ContactForm />
      </div>
    </main>
  );
}
