"use client";

import Image from "next/image";
import { gallery } from "@/lib/content";
import Marquee from "@/components/anim/Marquee";

export default function Gallery() {
  return (
    <section data-theme="light" className="overflow-hidden py-28 md:py-40">
      <Marquee speed={42}>
        {gallery.map((img, i) => (
          <div
            key={i}
            className="relative mr-4 h-64 w-52 shrink-0 overflow-hidden bg-paper-deep md:h-80 md:w-64"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 13rem, 16rem"
              className="object-cover grayscale-[0.15] transition-all duration-700 hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
