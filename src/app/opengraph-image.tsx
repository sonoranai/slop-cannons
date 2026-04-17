import { SECTION_ONE } from "@/content/preface";
import {
  generateOgImage,
  ogImageSize,
  ogImageContentType,
  makeSnippet,
} from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Slop Cannons — Rethinking Organizations for the Age of AI";

export default async function Image() {
  return generateOgImage({
    title: "SLOP CANNONS",
    subtitle: "Rethinking Organizations for the Age of AI",
    snippet: makeSnippet(SECTION_ONE),
  });
}
