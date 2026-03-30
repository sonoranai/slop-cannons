"use client";

import { SECTION_ONE } from "@/content/preface";

// shape-outside polygon traces the cup's left visible edge.
// Derived from pixel analysis of the cropped cup image (652x710).
// Each point: x% = leftmost dark pixel / image width, y% = band position.
// shape-outside polygon for CSS float. For a right-float, 100% x = right
// edge = no text displacement. Lower x% = more intrusion into text area.
// Top 18% is 100% (no displacement) so text above the cup rim stays full width.
const CUP_SHAPE = `polygon(
  100% 0%, 100% 18%,
  44% 22%, 38% 25%, 31% 28%, 24% 32%,
  6% 36%, 4% 40%, 3% 45%, 4% 50%,
  7% 55%, 7% 60%, 6% 65%, 6% 70%, 6% 75%,
  8% 78%, 11% 82%, 15% 87%, 22% 92%, 34% 97%,
  100% 100%
)`;

export function FictionalStory() {
  return (
    <section>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/coffee-cup.png"
        alt=""
        aria-hidden="true"
        style={{
          float: "right",
          width: 420,
          height: "auto",
          marginRight: -160,
          marginTop: 240,
          marginLeft: 16,
          marginBottom: 16,
          shapeOutside: CUP_SHAPE,
          shapeMargin: "16px",
          mixBlendMode: "multiply",
        }}
      />
      {SECTION_ONE.map((paragraph, i) => (
        <p key={i} className="mb-[1.25em]">
          {paragraph}
        </p>
      ))}
      <div style={{ clear: "both" }} />
    </section>
  );
}
