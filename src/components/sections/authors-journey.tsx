"use client";

import { BookText, type LinkMapping } from "@/components/book-text";
import { SectionHeader } from "@/components/section-header";
import { CompressionTimeline } from "@/components/illustrations/compression-timeline";
import { SECTION_THREE } from "@/content/preface";

const linksFirst: LinkMapping[] = [
  { text: "Generative AI is a forcing function", href: "/ai-forcing-function" },
];

const linksSecond: LinkMapping[] = [
  { text: "real complexity and inherited complexity", href: "/real-vs-inherited-complexity" },
];

export function AuthorsJourney() {
  return (
    <section>
      <SectionHeader>My Frame of Reference</SectionHeader>
      <BookText paragraphs={SECTION_THREE.slice(0, 2)} links={linksFirst} />
      <div className="my-[2em] md:my-[3em]">
        <CompressionTimeline />
      </div>
      <BookText paragraphs={SECTION_THREE.slice(2)} links={linksSecond} />
    </section>
  );
}
