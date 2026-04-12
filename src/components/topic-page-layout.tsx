import { SocialLinks } from "./social-links";
import { ConsultingCTA } from "./consulting-cta";

interface TopicPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function TopicPageLayout({
  title,
  subtitle,
  children,
}: TopicPageLayoutProps) {
  return (
    <>
      <SocialLinks position="top" />
      <main className="book-page max-w-[1120px] w-[94%] mx-auto px-[3%] pb-16">
        <article>
          <header className="pt-[8vh] pb-[2vh] md:pt-[12vh] md:pb-[4vh]">
            <a
              href="/"
              className="block text-[0.7em] mb-[2em] hover:opacity-70 transition-opacity duration-200"
              style={{ color: "rgba(140, 120, 180, 0.5)" }}
            >
              &larr; slopcannons.com
            </a>
            <h1
              className="text-[2.5em] md:text-[3.2em] font-bold tracking-tight leading-tight"
              style={{ color: "#2A4A7F" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-[0.5em] md:mt-[0.75em] text-[1.15em] md:text-[1.35em] font-normal leading-relaxed"
                style={{ color: "rgba(140, 120, 180, 0.6)" }}
              >
                {subtitle}
              </p>
            )}
            <div className="flex items-center justify-center mt-[2em] md:mt-[2.5em]">
              <div
                className="w-[24em] max-w-[75%]"
                style={{
                  height: "1px",
                  backgroundColor: "rgba(28, 27, 25, 0.15)",
                }}
              />
            </div>
          </header>
          <div className="leading-[1.75] space-y-[1.25em]">
            {children}
          </div>
        </article>
        <ConsultingCTA />
        <SocialLinks position="bottom" />
      </main>
    </>
  );
}
