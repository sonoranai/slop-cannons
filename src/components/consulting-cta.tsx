export function ConsultingCTA() {
  return (
    <aside
      className="mt-[4em] pt-[2em] text-[0.85em] leading-[1.8]"
      style={{ borderTop: "1px solid rgba(28, 27, 25, 0.1)" }}
    >
      <p style={{ color: "rgba(28, 27, 25, 0.5)" }}>
        <a
          href="https://sonoran.capital"
          className="hover:opacity-70 transition-opacity duration-200"
          style={{ color: "rgba(42, 74, 127, 0.7)" }}
        >
          SCI
        </a>
        {" "}partners with businesses building leaner, more coherent organizations
        focused on compounding intelligent systems over institutional hierarchy.
        Applied AI, platform data architecture, and organizational enablement in
        regulated environments.
      </p>
      <p className="mt-[0.8em]" style={{ color: "rgba(28, 27, 25, 0.4)" }}>
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
  );
}
