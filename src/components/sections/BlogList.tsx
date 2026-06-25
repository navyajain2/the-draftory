"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CornerDownRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  posts: BlogPost[];
  filters: string[];
};

/**
 * zypsy-exact Journal list: filter tabs + count, then full-width rows stacked
 * one under the other — image always left (~1.9:1, sharp, full colour), text
 * right (category pill + date, large title, "Read article" pinned to the
 * bottom of the row). No alternation, no excerpt.
 */
export default function BlogList({ posts, filters }: Props) {
  const [active, setActive] = useState(filters[0]);

  const shown =
    active === filters[0] ? posts : posts.filter((p) => p.tag === active);

  return (
    <div>
      {/* filter tabs + count */}
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <div className="flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 text-sm tracking-[-0.01em] transition-colors duration-300",
                active === f
                  ? "border-paper bg-paper text-noir"
                  : "border-paper/30 text-paper/70 hover:border-paper hover:text-paper",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="caption uppercase tracking-[0.12em] text-paper/45">
          {shown.length} in {active.toLowerCase()}
        </p>
      </div>

      {/* rows */}
      <div className="mt-10 flex flex-col border-t border-line-inv">
        {shown.map((post) => (
          <motion.article
            key={post.slug}
            layout
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-line-inv py-12 md:py-16"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24"
            >
              {/* image */}
              <div className="relative aspect-[19/10] w-full overflow-hidden bg-noir-soft">
                <Image
                  src={post.img}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>

              {/* text — pill+date top, title, read link pinned bottom */}
              <div className="flex flex-col justify-between py-1 lg:py-2">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-paper/30 px-4 py-1.5 text-sm text-paper/80">
                      {post.tag}
                    </span>
                    <span className="caption text-paper/45">{post.date}</span>
                  </div>

                  <h2 className="display mt-7 max-w-[16ch] text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.3] text-paper">
                    {post.title}
                  </h2>
                </div>

                <span className="rule-link mt-10 inline-flex w-fit text-xl tracking-[-0.01em] text-paper">
                  <CornerDownRight
                    className="h-[1.05em] w-[1.05em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                    strokeWidth={1.5}
                  />
                  Read article
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
