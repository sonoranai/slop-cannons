import { Metadata } from "next";
import { TopicPageLayout } from "@/components/topic-page-layout";
import { buildTopicMetadata, buildTopicJsonLd } from "@/lib/topic-meta";
import { TOPIC_META, TOPIC_PARAGRAPHS } from "@/content/topics/fire-team-model";

export const metadata: Metadata = buildTopicMetadata(TOPIC_META);

export default function Page() {
  const jsonLd = buildTopicJsonLd(TOPIC_META);
  return (
    <TopicPageLayout title={TOPIC_META.title} subtitle={TOPIC_META.subtitle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {TOPIC_PARAGRAPHS.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </TopicPageLayout>
  );
}
