import {
  TOPIC_META,
  TOPIC_PARAGRAPHS,
} from "@/content/topics/manifesto";
import {
  generateOgImage,
  ogImageSize,
  ogImageContentType,
  makeSnippet,
} from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = `${TOPIC_META.title} — Slop Cannons`;

export default async function Image() {
  return generateOgImage({
    title: TOPIC_META.title,
    subtitle: TOPIC_META.subtitle,
    snippet: makeSnippet(TOPIC_PARAGRAPHS),
    slug: TOPIC_META.slug,
  });
}
