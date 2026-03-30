"use client";

import { SECTION_ONE } from "@/content/preface";

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
        className="float-right"
        style={{
          width: "clamp(380px, 45vw, 420px)",
          height: "auto",
          marginRight: "clamp(-280px, -30vw, -160px)",
          marginTop: "clamp(100px, 20vw, 240px)",
          marginLeft: 16,
          marginBottom: 16,
          shapeOutside: CUP_SHAPE,
          shapeMargin: "12px",
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
