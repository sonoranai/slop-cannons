export function TitleBlock() {
  return (
    <header className="pt-[8vh] pb-[2vh] md:pt-[12vh] md:pb-[4vh] text-center">
      <h1
        className="text-[2.5em] md:text-[3.2em] font-bold tracking-tight leading-tight"
        style={{ color: "#2A4A7F" }}
      >
        SLOP CANNONS
      </h1>
      <p
        className="mt-[0.5em] md:mt-[0.75em] text-[1.15em] md:text-[1.35em] font-normal leading-relaxed"
        style={{ color: "rgba(140, 120, 180, 0.6)" }}
      >
        Rethinking Organizations for the Age of AI
      </p>
      {/* Rule */}
      <div className="flex items-center justify-center mt-[2em] md:mt-[2.5em]">
        <div
          className="w-[24em] max-w-[75%]"
          style={{ height: "1px", backgroundColor: "rgba(28, 27, 25, 0.15)" }}
        />
      </div>
      {/* Byline — middot centered on page, name and date balanced around it */}
      <div
        className="flex items-center justify-center mt-[1em] text-[0.75em] md:text-[0.8em] font-medium uppercase tracking-[0.2em]"
        style={{ color: "rgba(28, 27, 25, 0.3)" }}
      >
        <span className="text-right" style={{ minWidth: "7em" }}>Jason Neill</span>
        <span className="mx-[0.6em]">&middot;</span>
        <span className="text-left" style={{ minWidth: "7em" }}>March 29, 2026</span>
      </div>
    </header>
  );
}
