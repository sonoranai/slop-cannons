"use client";

import { BookText } from "@/components/book-text";
import { SectionHeader } from "@/components/section-header";
import { FireTeam } from "@/components/illustrations/fire-team";
import { SECTION_FOUR } from "@/content/preface";

export function Thesis() {
  return (
    <section>
      <SectionHeader>The Solution</SectionHeader>
      <BookText paragraphs={SECTION_FOUR.slice(0, 9)} />
      <div className="my-[2em] md:my-[3em]">
        <FireTeam />
      </div>
      <BookText paragraphs={SECTION_FOUR.slice(9)} />
    </section>
  );
}
