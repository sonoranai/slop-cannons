import { Metadata } from "next";
import { TopicPageLayout } from "@/components/topic-page-layout";
import { buildTopicMetadata, buildTopicJsonLd } from "@/lib/topic-meta";
import {
  TOPIC_META,
  GLOSSARY_ENTRIES,
  GLOSSARY_INTRO,
  CLUSTER_ORDER,
} from "@/content/topics/glossary";

export const metadata: Metadata = buildTopicMetadata(TOPIC_META);

export default function Page() {
  const jsonLd = buildTopicJsonLd(TOPIC_META);

  const entriesByCluster = CLUSTER_ORDER.map((cluster) => ({
    cluster,
    entries: GLOSSARY_ENTRIES.filter((e) => e.cluster === cluster),
  }));

  return (
    <TopicPageLayout title={TOPIC_META.title} subtitle={TOPIC_META.subtitle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p
        className="mb-[3em] text-[0.95em]"
        style={{ color: "rgba(28, 27, 25, 0.7)" }}
      >
        {GLOSSARY_INTRO}
      </p>
      {entriesByCluster.map(({ cluster, entries }) => (
        <section key={cluster} className="mb-[3em]">
          <h2
            className="text-[0.75em] uppercase tracking-[0.15em] mb-[1.5em] font-semibold"
            style={{ color: "rgba(28, 27, 25, 0.45)" }}
          >
            {cluster}
          </h2>
          <dl className="space-y-[2em]">
            {entries.map((entry, i) => (
              <div key={i}>
                <dt
                  className="font-semibold text-[1em]"
                  style={{ color: "#2A4A7F" }}
                >
                  {entry.link ? (
                    <a
                      href={entry.link}
                      className="hover:opacity-70 transition-opacity duration-200"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(42, 74, 127, 0.35)",
                        paddingBottom: "0.1em",
                      }}
                    >
                      {entry.term}
                    </a>
                  ) : (
                    entry.term
                  )}
                </dt>
                <dd
                  className="mt-[0.3em] text-[0.9em]"
                  style={{ color: "rgba(28, 27, 25, 0.6)" }}
                >
                  {entry.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </TopicPageLayout>
  );
}
