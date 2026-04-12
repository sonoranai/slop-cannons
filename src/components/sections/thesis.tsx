"use client";

import { BookText, type LinkMapping } from "@/components/book-text";
import { SectionHeader } from "@/components/section-header";
import { FireTeam } from "@/components/illustrations/fire-team";
import { SECTION_FOUR } from "@/content/preface";

const linksFirst: LinkMapping[] = [
  { text: "Expert Scalers and Slop Cannons", href: "/fire-team-model" },
  { text: "you create a team of value-seeking missiles", href: "/incentive-alignment" },
];

const linksSecond: LinkMapping[] = [
  { text: "The opportunity is larger than efficiency", href: "/applied-ai-value" },
  { text: "the compressed organization has room for people the old one didn\u2019t know how to value", href: "/domain-experts-as-builders" },
  { text: "The best leaders in the compressed org are not managers", href: "/engineering-leadership" },
];

export function Thesis() {
  return (
    <section>
      <SectionHeader>The Solution</SectionHeader>
      <BookText paragraphs={SECTION_FOUR.slice(0, 11)} links={linksFirst} />
      <div className="my-[2em] md:my-[3em]">
        <FireTeam />
      </div>
      <BookText paragraphs={SECTION_FOUR.slice(11)} links={linksSecond} />
    </section>
  );
}
