import type { Metadata } from "next";
import { blog } from "@/lib/content";
import InnerHeader from "@/components/sections/InnerHeader";
import Footer from "@/components/sections/Footer";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import BlogList from "@/components/sections/BlogList";

export const metadata: Metadata = {
  title: "Journal — The Draftory",
  description: blog.intro,
};

export default function BlogIndex() {
  return (
    <main className="relative bg-noir text-paper">
      <InnerHeader tone="paper" />

      {/* masthead */}
      <section data-theme="dark" className="shell pt-36 md:pt-44">
        <Reveal>
          <p className="eyebrow text-paper/45">{blog.eyebrow}</p>
        </Reveal>
        <AnimatedHeading
          text={blog.title}
          className="display display-xl mt-6 max-w-[16ch] text-paper"
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper/60 md:text-2xl">
            {blog.intro}
          </p>
        </Reveal>
      </section>

      {/* list */}
      <section
        data-theme="dark"
        className="shell mt-16 pb-28 md:mt-24 md:pb-40"
      >
        <BlogList posts={blog.posts} filters={blog.filters} />
      </section>

      <Footer />
    </main>
  );
}
