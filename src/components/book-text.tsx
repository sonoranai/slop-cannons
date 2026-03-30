"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

interface RenderedLine {
  text: string;
  x: number;
  y: number;
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
  className?: string;
}

export function BookText({ paragraphs, float, className }: BookTextProps) {
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

        allLines.push({ text: line.text, x, y });
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
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : (
        <>
          <div className="sr-only">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
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
              {line.text}
            </span>
          ))}
        </>
      )}
    </div>
  );
}
