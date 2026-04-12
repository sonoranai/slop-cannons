import { Metadata } from "next";
import { TopicPageLayout } from "@/components/topic-page-layout";
import { buildTopicMetadata, buildTopicJsonLd } from "@/lib/topic-meta";
import { TOPIC_META, GLOSSARY_ENTRIES } from "@/content/topics/glossary";

export const metadata: Metadata = buildTopicMetadata(TOPIC_META);

export default function Page() {
  const jsonLd = buildTopicJsonLd(TOPIC_META);
  return (
    <TopicPageLayout title={TOPIC_META.title} subtitle={TOPIC_META.subtitle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <dl className="space-y-[2em]">
        {GLOSSARY_ENTRIES.map((entry, i) => (
          <div key={i}>
            <dt className="font-semibold text-[1em]" style={{ color: "#2A4A7F" }}>
              {entry.link ? (
                <a href={entry.link} className="hover:opacity-70 transition-opacity duration-200" style={{ color: "inherit", textDecoration: "none" }}>
                  {entry.term}
                </a>
              ) : entry.term}
            </dt>
            <dd className="mt-[0.3em] text-[0.9em]" style={{ color: "rgba(28, 27, 25, 0.6)" }}>
              {entry.definition}
            </dd>
          </div>
        ))}
      </dl>
    </TopicPageLayout>
  );
}
