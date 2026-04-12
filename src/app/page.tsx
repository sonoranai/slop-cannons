import { TitleBlock } from "@/components/title-block";
import { DefinitionsPod } from "@/components/definitions-pod";
import { SectionDivider } from "@/components/section-divider";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { FictionalStory } from "@/components/sections/fictional-story";
import { Indictment } from "@/components/sections/indictment";
import { AuthorsJourney } from "@/components/sections/authors-journey";
import { Thesis } from "@/components/sections/thesis";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SLOP CANNONS: Rethinking Organizations for the Age of AI",
  description:
    "Most engineering organizations are built to explain work, not to do it. A blueprint for putting the people who understand the problem in the builder\u2019s seat \u2014 fire teams of Expert Scalers and Slop Cannons replacing layers of ceremony with measurable impact.",
  datePublished: "2026-03-29",
  dateModified: "2026-04-12",
  url: "https://slopcannons.com",
  inLanguage: "en",
  keywords: [
    "engineering organization design",
    "AI transformation",
    "fire teams",
    "compressed organizations",
    "engineering leadership",
    "applied AI",
    "team structure",
    "domain experts",
    "platform architecture",
  ],
  author: {
    "@type": "Person",
    name: "Jason Neill",
    url: "https://www.linkedin.com/in/jasonneill/",
    jobTitle: "Founder & Engineering Leader",
    description:
      "Engineering leader and founder who has operated at every layer — senior IC and principal engineer writing code full-time, to engineering manager scaling teams handling billions of financial events in prop trading. Has helped build multiple software-first businesses — some of which failed, some of which were acquired by groups including BlackRock and other strategic buyers. The failures matter as much as the wins.",
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
    sameAs: [
      "https://sonoran.capital",
      "https://www.linkedin.com/in/jasonneill/",
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://slopcannons.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SocialLinks position="top" />
      <main className="book-page max-w-[1120px] w-[94%] mx-auto px-[3%] pb-16">
        <article>
          <TitleBlock />
          <DefinitionsPod />
          <SectionDivider />
          <SectionHeader>Preface</SectionHeader>
          <FictionalStory />
          <SectionDivider />
          <Indictment />
          <SectionDivider />
          <AuthorsJourney />
          <SectionDivider />
          <Thesis />
          <SectionDivider />
          <aside>
            <p style={{ color: "rgba(28, 27, 25, 0.5)" }}>
              <a
                href="https://sonoran.capital"
                className="hover:opacity-70 transition-opacity duration-200"
                style={{ color: "rgba(42, 74, 127, 0.7)", textDecoration: "none" }}
              >
                SCI
              </a>
              {" "}partners with businesses building leaner, more coherent
              organizations focused on compounding intelligent systems over
              institutional hierarchy. Applied AI, platform data architecture,
              and organizational enablement in regulated environments.
            </p>
            <p className="mt-[1em]" style={{ color: "rgba(28, 27, 25, 0.4)" }}>
              <a
                href="https://app.reclaim.ai/m/jtn/flexible-quick-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                style={{ color: "rgba(42, 74, 127, 0.7)", textDecoration: "none" }}
              >
                Chat with a founder
              </a>
              {" "}of SCI.
            </p>
          </aside>
        </article>
        <SocialLinks position="bottom" />
      </main>
    </>
  );
}
