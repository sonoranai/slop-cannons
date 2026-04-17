import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

async function loadFont(weight: 400 | 500 | 700): Promise<ArrayBuffer> {
  const urls: Record<number, string> = {
    400: "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.ttf",
    500: "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-500-normal.ttf",
    700: "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-700-normal.ttf",
  };
  const res = await fetch(urls[weight]);
  if (!res.ok) {
    throw new Error(`Failed to load JetBrains Mono weight ${weight}`);
  }
  return res.arrayBuffer();
}

// Returns an array of paragraphs, preserving the source's paragraph
// structure (single-sentence percussion beats, etc). The last paragraph
// always ends with an ellipsis to signal continuation.
export function makeSnippet(paragraphs: string[], maxChars = 340): string[] {
  if (!paragraphs.length) return [];

  const result: string[] = [];
  let charCount = 0;

  for (const para of paragraphs) {
    const remaining = maxChars - charCount;
    if (remaining <= 0) break;

    if (para.length <= remaining) {
      result.push(para);
      charCount += para.length + 1;
      continue;
    }

    // Need to truncate this paragraph at a sentence boundary.
    const truncated = para.slice(0, remaining);
    const ends = [". ", "! ", "? "].map((p) => truncated.lastIndexOf(p));
    const lastEnd = Math.max(...ends);

    if (lastEnd > remaining * 0.5) {
      result.push(truncated.slice(0, lastEnd + 1).trim());
    } else if (result.length === 0) {
      // First paragraph with no good sentence break; fall back to word.
      result.push(truncated.slice(0, truncated.lastIndexOf(" ")).trim());
    }
    break;
  }

  if (result.length === 0) return [];

  // Always end the final paragraph with an ellipsis. Strip any trailing
  // terminal punctuation so we don't double up.
  const lastIndex = result.length - 1;
  result[lastIndex] = result[lastIndex].replace(/[.!?]+$/, "").trim() + "…";

  return result;
}

interface OgImageOptions {
  title: string;
  subtitle?: string;
  snippet: string[];
  slug?: string;
}

const ICON_COLOR = "rgba(140, 120, 180, 0.6)";

export async function generateOgImage({
  title,
  subtitle,
  snippet,
  slug,
}: OgImageOptions) {
  const [regular, medium, bold] = await Promise.all([
    loadFont(400),
    loadFont(500),
    loadFont(700),
  ]);

  const titleFontSize = title.length > 26 ? 60 : 72;
  const addressText = slug ? `slopcannons.com/${slug}` : "slopcannons.com";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 90px 52px",
          backgroundColor: "#FAF9F6",
          fontFamily: "JetBrains Mono",
        }}
      >
        {/* Content block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Top row: icons right */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 46,
              gap: 26,
            }}
          >
            {/* LinkedIn */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={ICON_COLOR}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {/* Email */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke={ICON_COLOR}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            {/* Globe */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke={ICON_COLOR}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: titleFontSize,
              fontWeight: 700,
              color: "#2A4A7F",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              marginBottom: 14,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "rgba(140, 120, 180, 0.7)",
                fontWeight: 400,
                marginBottom: 28,
                maxWidth: 1020,
              }}
            >
              {subtitle}
            </div>
          ) : null}

          {/* Divider */}
          <div
            style={{
              display: "flex",
              width: 400,
              height: 1,
              backgroundColor: "rgba(28, 27, 25, 0.18)",
              alignSelf: "center",
              marginBottom: 28,
            }}
          />

          {/* Body snippet — paragraphs preserved */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 1020,
            }}
          >
            {snippet.map((para, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "rgba(28, 27, 25, 0.78)",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {para}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-right canonical URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 20,
            color: ICON_COLOR,
            fontWeight: 500,
          }}
        >
          {addressText}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: medium, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
