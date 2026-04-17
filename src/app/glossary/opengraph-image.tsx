import { TOPIC_META, GLOSSARY_INTRO } from "@/content/topics/glossary";
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
    snippet: makeSnippet([GLOSSARY_INTRO]),
    slug: TOPIC_META.slug,
  });
}
