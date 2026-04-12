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
  url: "https://slopcannons.com",
  author: {
    "@type": "Person",
    name: "Jason Neill",
    url: "https://www.linkedin.com/in/jasonneill/",
    sameAs: [
      "https://www.linkedin.com/in/jasonneill/",
      "https://sonoran.capital",
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Sonoran Capital",
    url: "https://sonoran.capital",
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
        </article>
        <SocialLinks position="bottom" />
      </main>
    </>
  );
}
