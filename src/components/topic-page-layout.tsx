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
      <main className="book-page max-w-[720px] w-[94%] mx-auto px-[3%] pb-16">
        <article>
          <header className="pt-[6vh] pb-[2vh] md:pt-[8vh] md:pb-[3vh]">
            <a
              href="/"
              className="block text-[0.7em] mb-[2em] hover:opacity-70 transition-opacity duration-200"
              style={{ color: "rgba(140, 120, 180, 0.5)" }}
            >
              &larr; slopcannons.com
            </a>
            <h1
              className="text-[1.8em] md:text-[2.2em] font-bold tracking-tight leading-tight"
              style={{ color: "#2A4A7F" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-[0.4em] text-[1em] md:text-[1.1em] font-normal leading-relaxed"
                style={{ color: "rgba(140, 120, 180, 0.6)" }}
              >
                {subtitle}
              </p>
            )}
            <div className="flex items-start mt-[1.5em]">
              <div
                className="w-[6em]"
                style={{
                  height: "1px",
                  backgroundColor: "rgba(28, 27, 25, 0.15)",
                }}
              />
            </div>
          </header>
          <div className="text-[1em] leading-[1.75] space-y-[1.25em]">
            {children}
          </div>
        </article>
        <ConsultingCTA />
        <SocialLinks position="bottom" />
      </main>
    </>
  );
}
