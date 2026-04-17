export function DefinitionsPod() {
  return (
    <div className="my-[0.5em] md:my-[1em]">
      <div
        className="relative mx-auto"
        style={{
          border: "1.5px dashed rgba(140, 120, 180, 0.35)",
          borderRadius: "10px",
          padding: "2.5em 1.8em 1.8em",
        }}
      >
        {/* POD label centered on top dashed border */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "-0.7em",
            backgroundColor: "#FAF9F6",
            padding: "0 1.2em",
            fontSize: "0.75em",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#2A4A7F",
          }}
        >
          <span className="hidden md:inline">FORWARD-DEPLOYED ENGINEERING POD</span>
          <span className="md:hidden">FDE POD</span>
        </div>

        {/* Expert Scaler */}
        <div
          style={{
            border: "1px solid rgba(28, 27, 25, 0.2)",
            borderRadius: "6px",
            backgroundColor: "#FAF9F6",
            padding: "1.2em 1.4em",
          }}
        >
          <p style={{ fontSize: "0.85em", fontWeight: 600 }}>
            <a href="/expert-scaler" style={{ color: "inherit", textDecoration: "none" }} className="hover:opacity-70 transition-opacity duration-200">Expert Scaler</a>
          </p>
          <div
            style={{
              height: "1px",
              background: "rgba(28, 27, 25, 0.08)",
              margin: "0.6em 0 0.8em",
            }}
          />
          <p style={{ fontSize: "0.65em", lineHeight: 1.75, color: "rgba(28, 27, 25, 0.4)" }}>
            Deep-system thinker. Holds the architecture in their head and knows what should not be built. Identifies, with the Slop Cannon, the Minimum Valuable Project (MVaP) worth shipping. Shepherds what earns its place into systems that survive production.
          </p>
        </div>

        {/* Connector — diamond + line + dot + line + diamond */}
        <div className="flex justify-center" style={{ padding: "0.2em 0" }}>
          <svg width="20" height="48" viewBox="0 0 20 48" fill="none">
            {/* Top diamond */}
            <polygon points="10,2 14,6 10,10 6,6" fill="#2A4A7F" opacity="0.5" />
            {/* Line */}
            <line x1="10" y1="10" x2="10" y2="20" stroke="#2A4A7F" strokeWidth="1" opacity="0.4" />
            {/* Center dot */}
            <circle cx="10" cy="24" r="3.5" fill="#2A4A7F" opacity="0.55" />
            {/* Line */}
            <line x1="10" y1="28" x2="10" y2="38" stroke="#2A4A7F" strokeWidth="1" opacity="0.4" />
            {/* Bottom diamond */}
            <polygon points="10,38 14,42 10,46 6,42" fill="#2A4A7F" opacity="0.5" />
          </svg>
        </div>

        {/* Slop Cannon */}
        <div
          style={{
            border: "1px solid rgba(28, 27, 25, 0.2)",
            borderRadius: "6px",
            backgroundColor: "#FAF9F6",
            padding: "1.2em 1.4em",
          }}
        >
          <p style={{ fontSize: "0.85em", fontWeight: 600 }}>
            <a href="/slop-cannon" style={{ color: "inherit", textDecoration: "none" }} className="hover:opacity-70 transition-opacity duration-200">Slop Cannon</a>
          </p>
          <div
            style={{
              height: "1px",
              background: "rgba(28, 27, 25, 0.08)",
              margin: "0.6em 0 0.8em",
            }}
          />
          <p style={{ fontSize: "0.65em", lineHeight: 1.75, color: "rgba(28, 27, 25, 0.4)" }}>
            High-velocity builder. Often from outside engineering, or an early-career engineer with subject-matter expertise (or the drive to learn it). Ships rough, fast, in public, unburdened by what the stack supposedly cannot do. Pairs with the Expert Scaler to deliver the MVaP, keeping ideas alive past first contact with production.
          </p>
        </div>
      </div>
    </div>
  );
}
