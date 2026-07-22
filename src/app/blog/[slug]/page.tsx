import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CornerDownRight } from "lucide-react";
import { blog, type BlogBlock } from "@/lib/content";
import InnerHeader from "@/components/sections/InnerHeader";
import Footer from "@/components/sections/Footer";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import ArticleShare from "@/components/blog/ArticleShare";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://thedraftory.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://thedraftory.com/blog/${slug}`,
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.isoDate,
      authors: ["https://thedraftory.com"],
      tags: [post.tag, "founder ghostwriting", "founder personal brand"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.img],
    },
  };
}

/** Renders one editorial content block (dark theme). */
function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="display display-sm mt-14 mb-1 text-paper">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-accent pl-6 md:pl-8">
          <p className="display display-sm font-[350] leading-[1.25] text-paper">
            “{block.text}”
          </p>
          {block.cite && (
            <cite className="caption mt-4 block not-italic text-paper/45">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-6 flex flex-col gap-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-paper/65">
              <span className="mt-[0.6em] h-[6px] w-[6px] shrink-0 rounded-full bg-accent" />
              <span className="text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "html":
      return (
        <p
          className="my-6 text-lg leading-[1.75] text-paper/65 [&_a]:text-paper [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-accent"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    default:
      return (
        <p className="my-6 text-lg leading-[1.75] text-paper/65">
          {block.text}
        </p>
      );
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blog.posts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.img,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: "The Draftory",
      url: "https://thedraftory.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Draftory",
      url: "https://thedraftory.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thedraftory.com/blog/${slug}`,
    },
  };

  return (
    <main className="relative bg-noir text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InnerHeader tone="paper" action={{ label: "Journal", href: "/blog" }} />

      <section data-theme="dark" className="shell pt-32 md:pt-40">
        <article className="mx-auto max-w-3xl">
          {/* title */}
          <AnimatedHeading
            text={post.title}
            className="display display-lg text-paper"
          />

          {/* meta row */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line-inv pb-8">
              <span className="caption uppercase tracking-[0.06em] text-paper/55">
                {post.date}
              </span>
              <span className="caption uppercase tracking-[0.12em] text-paper/55">
                {post.readingTime}
              </span>
              <span className="caption uppercase tracking-[0.12em] text-paper/55">
                Written by {post.author.name}
              </span>
              <span className="rounded-full border border-line-inv px-3 py-1 text-xs text-paper/70">
                {post.tag}
              </span>
            </div>
          </Reveal>

          {/* hero image — full container width */}
          <Reveal delay={0.15}>
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-noir-soft">
              <Image
                src={post.img}
                alt={post.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* lede + body — constrained to 65ch for comfortable reading */}
          <div className="mx-auto mt-12 max-w-prose">
            <p className="text-xl leading-relaxed text-paper/80 md:text-2xl">
              {post.excerpt}
            </p>
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* author card */}
            <div className="mt-16 flex items-center gap-4 border-t border-line-inv pt-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-paper text-base font-medium text-noir">
                {post.author.name.charAt(0)}
              </span>
              <div className="leading-tight">
                <p className="text-base text-paper">{post.author.name}</p>
                <p className="caption text-paper/45">{post.author.role}</p>
              </div>
            </div>

            {/* share */}
            <div className="mt-8">
              <ArticleShare title={post.title} />
            </div>

            {/* newsletter */}
            <div className="mt-16 border-t border-line-inv pt-12">
              <NewsletterSignup />
            </div>
          </div>
        </article>
      </section>

      {/* ---------- related articles ---------- */}
      <section
        data-theme="dark"
        className="shell mt-28 pb-28 md:mt-36 md:pb-40"
      >
        <div className="flex items-end justify-between gap-6">
          <AnimatedHeading
            text="Related articles"
            className="display display-lg text-paper"
          />
          <Reveal delay={0.1} className="hidden shrink-0 md:block">
            <Link
              href="/blog"
              className="rule-link group whitespace-nowrap text-lg tracking-[-0.01em] text-paper"
            >
              <CornerDownRight
                className="h-[1.1em] w-[1.1em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                strokeWidth={1.5}
              />
              View all
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-14 md:mt-20 md:grid-cols-2">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-noir-soft">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="rounded-full border border-line-inv px-3 py-1 text-xs text-paper/70">
                    {p.tag}
                  </span>
                  <span className="caption text-paper/45">{p.date}</span>
                </div>
                <h3 className="display display-sm mt-3 max-w-[22ch] text-paper">
                  {p.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
