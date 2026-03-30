"use client";

import { BookText } from "@/components/book-text";
import { SectionHeader } from "@/components/section-header";
import { CompressionTimeline } from "@/components/illustrations/compression-timeline";
import { SECTION_THREE } from "@/content/preface";

export function AuthorsJourney() {
  return (
    <section>
      <SectionHeader>My Frame of Reference</SectionHeader>
      <BookText paragraphs={SECTION_THREE.slice(0, 2)} />
      <div className="my-[2em] md:my-[3em]">
        <CompressionTimeline />
      </div>
      <BookText paragraphs={SECTION_THREE.slice(2)} />
    </section>
  );
}
