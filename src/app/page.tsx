import { TitleBlock } from "@/components/title-block";
import { SectionDivider } from "@/components/section-divider";
import { SectionHeader } from "@/components/section-header";
import { FictionalStory } from "@/components/sections/fictional-story";
import { Indictment } from "@/components/sections/indictment";
import { AuthorsJourney } from "@/components/sections/authors-journey";
import { Thesis } from "@/components/sections/thesis";

export default function Home() {
  return (
    <main className="book-page max-w-[1120px] w-[94%] mx-auto px-[3%] pb-32">
      <article>
        <TitleBlock />
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
    </main>
  );
}
