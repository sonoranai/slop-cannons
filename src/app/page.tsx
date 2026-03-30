import { TitleBlock } from "@/components/title-block";
import { DefinitionsPod } from "@/components/definitions-pod";
import { SectionDivider } from "@/components/section-divider";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { FictionalStory } from "@/components/sections/fictional-story";
import { Indictment } from "@/components/sections/indictment";
import { AuthorsJourney } from "@/components/sections/authors-journey";
import { Thesis } from "@/components/sections/thesis";

export default function Home() {
  return (
    <>
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
