"use client";

import { BookText } from "@/components/book-text";
import { SectionHeader } from "@/components/section-header";
import { OrgChart } from "@/components/illustrations/org-chart";
import { SECTION_TWO } from "@/content/preface";

export function Indictment() {
  return (
    <section>
      <SectionHeader>The Problem</SectionHeader>
      <BookText paragraphs={SECTION_TWO.slice(0, 4)} />
      <div className="my-[2em] md:my-[3em] max-w-lg mx-auto">
        <OrgChart />
      </div>
      <BookText paragraphs={SECTION_TWO.slice(4)} />
    </section>
  );
}
