import type { Metadata } from "next";

interface TopicMetaOptions {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  keywords?: string[];
}

export function buildTopicMetadata(opts: TopicMetaOptions): Metadata {
  return {
    title: `${opts.title} — SLOP CANNONS`,
    description: opts.description,
    authors: [
      { name: "Jason Neill", url: "https://www.linkedin.com/in/jasonneill/" },
    ],
    openGraph: {
      title: `${opts.title} — SLOP CANNONS`,
      description: opts.description,
      type: "article",
      url: `https://slopcannons.com/${opts.slug}`,
      siteName: "Slop Cannons",
      authors: ["Jason Neill"],
    },
    twitter: {
      card: "summary",
      title: `${opts.title} — SLOP CANNONS`,
      description: opts.description,
    },
  };
}

export function buildTopicJsonLd(opts: TopicMetaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${opts.title} — Slop Cannons`,
    description: opts.description,
    datePublished: opts.datePublished ?? "2026-03-29",
    dateModified: "2026-04-12",
    url: `https://slopcannons.com/${opts.slug}`,
    inLanguage: "en",
    keywords: opts.keywords ?? [],
    isPartOf: {
      "@type": "WebSite",
      name: "Slop Cannons",
      url: "https://slopcannons.com",
    },
    author: {
      "@type": "Person",
      name: "Jason Neill",
      url: "https://www.linkedin.com/in/jasonneill/",
      jobTitle: "Founder & Engineering Leader",
      worksFor: {
        "@type": "Organization",
        name: "Sonoran Capital",
        url: "https://sonoran.capital",
      },
      sameAs: [
        "https://www.linkedin.com/in/jasonneill/",
        "https://sonoran.capital",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Sonoran Capital",
      url: "https://sonoran.capital",
      description:
        "Applied artificial intelligence consultancy specializing in platform data architecture at scale in highly regulated environments.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://slopcannons.com/${opts.slug}`,
    },
  };
}
