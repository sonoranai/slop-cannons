"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

export interface LinkMapping {
  text: string;
  href: string;
}

interface RenderedLine {
  text: string;
  x: number;
  y: number;
  /** Character offset of this line within its source paragraph */
  charOffset: number;
  /** Index of the source paragraph */
  paragraphIndex: number;
}

/**
 * Contour-based float: text flows around the silhouette of an image.
 *
 * `contour` — one entry per text line overlapping the image. Each value is
 * how many px of horizontal space the image occupies on its side of the
 * container (measured from the container edge inward). pretext uses this
 * per-line to compute `availableWidth = containerWidth - contour[i] - gap`.
 *
 * `imageRight` — CSS `right` value. Negative to spill outside the container.
 */
export interface ContourFloat {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  side: "left" | "right";
  gap: number;
  offsetY: number;
  imageRight: number;
  contour: number[];
}

interface BookTextProps {
  paragraphs: string[];
  float?: ContourFloat;
  links?: LinkMapping[];
  className?: string;
}

/** A range within a paragraph where a link exists */
interface LinkRange {
  start: number;
  end: number;
  href: string;
}

/** Pre-compute all link ranges for each paragraph */
function buildLinkRanges(
  paragraphs: string[],
  links: LinkMapping[]
): LinkRange[][] {
  return paragraphs.map((para) => {
    const ranges: LinkRange[] = [];
    for (const link of links) {
      let searchFrom = 0;
      while (true) {
        const idx = para.indexOf(link.text, searchFrom);
        if (idx === -1) break;
        ranges.push({ start: idx, end: idx + link.text.length, href: link.href });
        searchFrom = idx + link.text.length;
      }
    }
    // Sort by start position so rendering is ordered
    ranges.sort((a, b) => a.start - b.start);
    return ranges;
  });
}

const linkStyle: React.CSSProperties = {
  color: "rgba(42, 74, 127, 0.6)",
  textDecoration: "none",
  transition: "opacity 200ms",
};

/** Render a line's text with inline links where ranges overlap */
function renderLineWithLinks(
  lineText: string,
  lineCharOffset: number,
  linkRanges: LinkRange[]
): ReactNode {
  if (linkRanges.length === 0) return lineText;

  const lineStart = lineCharOffset;
  const lineEnd = lineCharOffset + lineText.length;

  // Find ranges that overlap this line
  const overlapping = linkRanges.filter(
    (r) => r.start < lineEnd && r.end > lineStart
  );
  if (overlapping.length === 0) return lineText;

  const segments: ReactNode[] = [];
  let cursor = 0; // position within lineText

  for (const range of overlapping) {
    // Clamp range to this line's boundaries
    const rangeStartInLine = Math.max(0, range.start - lineStart);
    const rangeEndInLine = Math.min(lineText.length, range.end - lineStart);

    // Text before this link
    if (rangeStartInLine > cursor) {
      segments.push(lineText.slice(cursor, rangeStartInLine));
    }

    // The linked text
    segments.push(
      <a
        key={`${range.start}-${range.href}`}
        href={range.href}
        style={linkStyle}
        className="hover:opacity-70"
      >
        {lineText.slice(rangeStartInLine, rangeEndInLine)}
      </a>
    );

    cursor = rangeEndInLine;
  }

  // Remaining text after last link
  if (cursor < lineText.length) {
    segments.push(lineText.slice(cursor));
  }

  return segments;
}

/** Render a paragraph's text with inline links for the sr-only fallback */
function renderParagraphWithLinks(
  paraText: string,
  linkRanges: LinkRange[]
): ReactNode {
  if (linkRanges.length === 0) return paraText;

  const segments: ReactNode[] = [];
  let cursor = 0;

  for (const range of linkRanges) {
    if (range.start > cursor) {
      segments.push(paraText.slice(cursor, range.start));
    }
    segments.push(
      <a key={`sr-${range.start}-${range.href}`} href={range.href}>
        {paraText.slice(range.start, range.end)}
      </a>
    );
    cursor = range.end;
  }

  if (cursor < paraText.length) {
    segments.push(paraText.slice(cursor));
  }

  return segments;
}

export function BookText({ paragraphs, float, links, className }: BookTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [totalHeight, setTotalHeight] = useState(0);
  const [ready, setReady] = useState(false);
  const lineHeightRef = useRef(28);
  const paragraphGapRef = useRef(20);

  const doLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    if (containerWidth === 0) return;

    const computed = window.getComputedStyle(containerRef.current);
    const fontSizePx = parseFloat(computed.fontSize);
    // Read the actual computed font-family — next/font generates hashed names
    const fontFamily = computed.fontFamily;
    const fontString = `${fontSizePx}px ${fontFamily}`;
    const lineHeight = Math.round(fontSizePx * 1.75);
    const paragraphGap = Math.round(fontSizePx * 1.25);
    lineHeightRef.current = lineHeight;
    paragraphGapRef.current = paragraphGap;

    const allLines: RenderedLine[] = [];
    let y = 0;

    for (let p = 0; p < paragraphs.length; p++) {
      const prepared = prepareWithSegments(paragraphs[p], fontString);
      let cursor = { segmentIndex: 0, graphemeIndex: 0 };
      let charOffset = 0;

      while (true) {
        let availableWidth = containerWidth;
        let x = 0;

        if (float) {
          const relY = y - float.offsetY;
          const lineIdx = Math.floor(relY / lineHeight);
          if (lineIdx >= 0 && lineIdx < float.contour.length) {
            const indent = float.contour[lineIdx];
            if (indent > 0) {
              availableWidth = containerWidth - indent - float.gap;
              if (float.side === "left") {
                x = indent + float.gap;
              }
            }
          }
        }

        // Don't let available width get too narrow
        if (availableWidth < fontSizePx * 8) {
          availableWidth = containerWidth;
          x = 0;
        }

        const line = layoutNextLine(prepared, cursor, availableWidth);
        if (line === null) break;

        allLines.push({
          text: line.text,
          x,
          y,
          charOffset,
          paragraphIndex: p,
        });
        charOffset += line.text.length;
        cursor = line.end;
        y += lineHeight;
      }

      if (p < paragraphs.length - 1) {
        y += paragraphGap;
      }
    }

    setLines(allLines);
    setTotalHeight(y);
    setReady(true);
  }, [paragraphs, float]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      doLayout();
    });
  }, [doLayout]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      doLayout();
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [doLayout]);

  const lh = lineHeightRef.current;
  const allLinkRanges = links ? buildLinkRanges(paragraphs, links) : null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        minHeight: ready ? totalHeight : undefined,
        overflow: "visible",
      }}
    >
      {!ready ? (
        <div style={{ display: "flex", flexDirection: "column", gap: `${paragraphGapRef.current}px` }}>
          {paragraphs.map((p, i) => (
            <p key={i}>
              {allLinkRanges
                ? renderParagraphWithLinks(p, allLinkRanges[i])
                : p}
            </p>
          ))}
        </div>
      ) : (
        <>
          <div className="sr-only">
            {paragraphs.map((p, i) => (
              <p key={i}>
                {allLinkRanges
                  ? renderParagraphWithLinks(p, allLinkRanges[i])
                  : p}
              </p>
            ))}
          </div>

          {float && (
            <img
              src={float.imageSrc}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                right: float.imageRight,
                top: float.offsetY,
                width: float.imageWidth,
                height: float.imageHeight,
                mixBlendMode: "multiply",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          )}

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
                zIndex: 0,
              }}
            >
              {allLinkRanges
                ? renderLineWithLinks(
                    line.text,
                    line.charOffset,
                    allLinkRanges[line.paragraphIndex]
                  )
                : line.text}
            </span>
          ))}
        </>
      )}
    </div>
  );
}
