"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";
import { SECTION_ONE } from "@/content/preface";

// Left edge of cup drawing as % of image width at each vertical band (20 bands).
// From pixel analysis of the cropped 652x710 image.
const CUP_LEFT_EDGE_PCT = [
  0.53, 0.44, 0.38, 0.37, 0.31, 0.24,
  0.06, 0.04, 0.03, 0.04,
  0.07, 0.07, 0.06, 0.06, 0.06,
  0.08, 0.11, 0.15, 0.22, 0.34,
];

const IMAGE_WIDTH = 420;
const IMAGE_ASPECT = 710 / 652; // height/width of source image
const IMAGE_HEIGHT = IMAGE_WIDTH * IMAGE_ASPECT;
const BAND_COUNT = CUP_LEFT_EDGE_PCT.length;
const PADDING = 14; // gap between text and cup edge

interface Line {
  text: string;
  x: number;
  y: number;
}

export function FictionalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [totalHeight, setTotalHeight] = useState(0);
  const [ready, setReady] = useState(false);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({});
  const lineHeightRef = useRef(28);

  const doLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    if (containerWidth === 0) return;

    const computed = window.getComputedStyle(containerRef.current);
    const fontSizePx = parseFloat(computed.fontSize);
    const fontFamily = computed.fontFamily;
    const fontString = `${fontSizePx}px ${fontFamily}`;
    const lineHeight = Math.round(fontSizePx * 1.75);
    const paragraphGap = Math.round(fontSizePx * 1.25);
    lineHeightRef.current = lineHeight;

    // Responsive image positioning — more off-screen on narrower viewports
    const marginRight = containerWidth < 500
      ? -300
      : containerWidth < 768
        ? -220
        : -160;
    const marginTop = containerWidth < 500
      ? lineHeight * 3
      : containerWidth < 768
        ? lineHeight * 6
        : lineHeight * 8;

    // Where the image sits relative to the container
    const imageLeft = containerWidth + marginRight - IMAGE_WIDTH + Math.abs(marginRight);
    // Simpler: image right edge = containerWidth - marginRight (marginRight is negative)
    const imageRightEdge = containerWidth - marginRight; // extends past container
    const imageLeftEdge = imageRightEdge - IMAGE_WIDTH;
    const imageTop = marginTop;
    const bandHeight = IMAGE_HEIGHT / BAND_COUNT;

    setImageStyle({
      position: "absolute",
      right: marginRight,
      top: imageTop,
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      mixBlendMode: "multiply",
      pointerEvents: "none",
    });

    // Layout text with pretext
    const allLines: Line[] = [];
    let y = 0;

    for (let p = 0; p < SECTION_ONE.length; p++) {
      const prepared = prepareWithSegments(SECTION_ONE[p], fontString);
      let cursor = { segmentIndex: 0, graphemeIndex: 0 };

      while (true) {
        let availableWidth = containerWidth;

        // Check if this line overlaps the cup image
        const relY = y - imageTop;
        if (relY >= 0 && relY < IMAGE_HEIGHT) {
          const bandIdx = Math.min(
            Math.floor(relY / bandHeight),
            BAND_COUNT - 1
          );
          const cupLeftPct = CUP_LEFT_EDGE_PCT[bandIdx];
          // Cup's left edge in container coordinates
          const cupLeftInContainer = imageLeftEdge + cupLeftPct * IMAGE_WIDTH;

          if (cupLeftInContainer < containerWidth) {
            // Cup is visible at this Y — indent text
            const indent = containerWidth - cupLeftInContainer + PADDING;
            const textWidth = containerWidth - indent;
            if (textWidth > fontSizePx * 6) {
              availableWidth = textWidth;
            }
            // If too narrow, skip indentation — text goes full width
          }
        }

        const line = layoutNextLine(prepared, cursor, availableWidth);
        if (line === null) break;

        allLines.push({ text: line.text, x: 0, y });
        cursor = line.end;
        y += lineHeight;
      }

      if (p < SECTION_ONE.length - 1) {
        y += paragraphGap;
      }
    }

    setLines(allLines);
    setTotalHeight(y);
    setReady(true);
  }, []);

  useEffect(() => {
    document.fonts.ready.then(doLayout);
  }, [doLayout]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(doLayout);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [doLayout]);

  const lh = lineHeightRef.current;

  return (
    <section>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          minHeight: ready ? totalHeight : undefined,
          overflow: "visible",
        }}
      >
        {!ready ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {SECTION_ONE.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <>
            <div className="sr-only">
              {SECTION_ONE.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/coffee-cup.png"
              alt=""
              aria-hidden="true"
              style={imageStyle}
            />

            {lines.map((line, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  display: "block",
                  position: "absolute",
                  left: line.x,
                  top: line.y,
                  height: lh,
                  lineHeight: `${lh}px`,
                  whiteSpace: "nowrap",
                }}
              >
                {line.text}
              </span>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
