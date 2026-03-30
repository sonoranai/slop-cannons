export function OrgChart() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full h-auto"
    >
      {/* ── Connecting lines ── accent blue */}
      <g stroke="#4A90D9" strokeWidth="0.8">
        {/* CTO → VPs */}
        <line x1="260" y1="30" x2="260" y2="42" />
        <line x1="260" y1="42" x2="130" y2="42" />
        <line x1="260" y1="42" x2="390" y2="42" />
        <line x1="130" y1="42" x2="130" y2="52" />
        <line x1="390" y1="42" x2="390" y2="52" />

        {/* VP → Directors */}
        <line x1="130" y1="78" x2="130" y2="88" />
        <line x1="130" y1="88" x2="65" y2="88" />
        <line x1="130" y1="88" x2="195" y2="88" />
        <line x1="65" y1="88" x2="65" y2="98" />
        <line x1="195" y1="88" x2="195" y2="98" />

        <line x1="390" y1="78" x2="390" y2="88" />
        <line x1="390" y1="88" x2="325" y2="88" />
        <line x1="390" y1="88" x2="455" y2="88" />
        <line x1="325" y1="88" x2="325" y2="98" />
        <line x1="455" y1="88" x2="455" y2="98" />

        {/* Directors → Sr Mgrs */}
        <line x1="65" y1="124" x2="65" y2="134" />
        <line x1="195" y1="124" x2="195" y2="134" />
        <line x1="325" y1="124" x2="325" y2="134" />
        <line x1="455" y1="124" x2="455" y2="134" />

        {/* Sr Mgrs → Mgrs */}
        <line x1="65" y1="160" x2="65" y2="170" />
        <line x1="65" y1="170" x2="35" y2="170" />
        <line x1="65" y1="170" x2="95" y2="170" />
        <line x1="35" y1="170" x2="35" y2="180" />
        <line x1="95" y1="170" x2="95" y2="180" />

        <line x1="195" y1="160" x2="195" y2="170" />
        <line x1="195" y1="170" x2="165" y2="170" />
        <line x1="195" y1="170" x2="225" y2="170" />
        <line x1="165" y1="170" x2="165" y2="180" />
        <line x1="225" y1="170" x2="225" y2="180" />

        <line x1="325" y1="160" x2="325" y2="170" />
        <line x1="325" y1="170" x2="295" y2="170" />
        <line x1="325" y1="170" x2="355" y2="170" />
        <line x1="295" y1="170" x2="295" y2="180" />
        <line x1="355" y1="170" x2="355" y2="180" />

        <line x1="455" y1="160" x2="455" y2="170" />
        <line x1="455" y1="170" x2="425" y2="170" />
        <line x1="455" y1="170" x2="485" y2="170" />
        <line x1="425" y1="170" x2="425" y2="180" />
        <line x1="485" y1="170" x2="485" y2="180" />

        {/* Mgr → Eng levels (just show one branch fully for clarity) */}
        {/* Left-most manager's full hierarchy */}
        <line x1="35" y1="206" x2="35" y2="224" />
        <line x1="35" y1="250" x2="35" y2="268" />
        <line x1="35" y1="294" x2="35" y2="312" />
        <line x1="35" y1="338" x2="35" y2="354" />

        {/* Other managers just get dots to indicate depth */}
        <line x1="95" y1="206" x2="95" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="165" y1="206" x2="165" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="225" y1="206" x2="225" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="295" y1="206" x2="295" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="355" y1="206" x2="355" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="425" y1="206" x2="425" y2="216" strokeDasharray="2 3" opacity="0.5" />
        <line x1="485" y1="206" x2="485" y2="216" strokeDasharray="2 3" opacity="0.5" />
      </g>

      {/* ── Boxes ── */}
      <g stroke="currentColor" fill="#FAF9F6">
        {/* CTO */}
        <rect x="228" y="8" width="64" height="22" rx="2" />

        {/* VPs */}
        <rect x="98" y="52" width="64" height="26" rx="2" />
        <rect x="358" y="52" width="64" height="26" rx="2" />

        {/* Directors */}
        <rect x="33" y="98" width="64" height="26" rx="2" />
        <rect x="163" y="98" width="64" height="26" rx="2" />
        <rect x="293" y="98" width="64" height="26" rx="2" />
        <rect x="423" y="98" width="64" height="26" rx="2" />

        {/* Sr Managers */}
        <rect x="33" y="134" width="64" height="26" rx="2" />
        <rect x="163" y="134" width="64" height="26" rx="2" />
        <rect x="293" y="134" width="64" height="26" rx="2" />
        <rect x="423" y="134" width="64" height="26" rx="2" />

        {/* Managers */}
        <rect x="6" y="180" width="58" height="26" rx="2" />
        <rect x="66" y="180" width="58" height="26" rx="2" />
        <rect x="136" y="180" width="58" height="26" rx="2" />
        <rect x="196" y="180" width="58" height="26" rx="2" />
        <rect x="266" y="180" width="58" height="26" rx="2" />
        <rect x="326" y="180" width="58" height="26" rx="2" />
        <rect x="396" y="180" width="58" height="26" rx="2" />
        <rect x="456" y="180" width="58" height="26" rx="2" />

        {/* Full engineer ladder under left-most manager */}
        <rect x="6" y="224" width="58" height="26" rx="2" />
        <rect x="6" y="268" width="58" height="26" rx="2" />
        <rect x="6" y="312" width="58" height="26" rx="2" />
        <rect x="6" y="354" width="58" height="20" rx="2" />
      </g>

      {/* ── Ellipsis dots under other managers ── */}
      <g fill="currentColor" opacity="0.35">
        <circle cx="95" cy="220" r="1.2" />
        <circle cx="95" cy="226" r="1.2" />
        <circle cx="95" cy="232" r="1.2" />
        <circle cx="165" cy="220" r="1.2" />
        <circle cx="165" cy="226" r="1.2" />
        <circle cx="165" cy="232" r="1.2" />
        <circle cx="225" cy="220" r="1.2" />
        <circle cx="225" cy="226" r="1.2" />
        <circle cx="225" cy="232" r="1.2" />
        <circle cx="295" cy="220" r="1.2" />
        <circle cx="295" cy="226" r="1.2" />
        <circle cx="295" cy="232" r="1.2" />
        <circle cx="355" cy="220" r="1.2" />
        <circle cx="355" cy="226" r="1.2" />
        <circle cx="355" cy="232" r="1.2" />
        <circle cx="425" cy="220" r="1.2" />
        <circle cx="425" cy="226" r="1.2" />
        <circle cx="425" cy="232" r="1.2" />
        <circle cx="485" cy="220" r="1.2" />
        <circle cx="485" cy="226" r="1.2" />
        <circle cx="485" cy="232" r="1.2" />
      </g>

      {/* ── Labels ── */}
      <g
        fill="currentColor"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="8"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {/* Top tier */}
        <text x="260" y="19">CTO</text>

        {/* VP tier */}
        <text x="130" y="65">VP Eng</text>
        <text x="390" y="65">VP Plat</text>

        {/* Director tier */}
        <text x="65" y="111">Dir</text>
        <text x="195" y="111">Dir</text>
        <text x="325" y="111">Dir</text>
        <text x="455" y="111">Dir</text>

        {/* Sr Manager tier */}
        <text x="65" y="147" fontSize="7">Sr Mgr</text>
        <text x="195" y="147" fontSize="7">Sr Mgr</text>
        <text x="325" y="147" fontSize="7">Sr Mgr</text>
        <text x="455" y="147" fontSize="7">Sr Mgr</text>

        {/* Manager tier */}
        <text x="35" y="193" fontSize="7">Mgr</text>
        <text x="95" y="193" fontSize="7">Mgr</text>
        <text x="165" y="193" fontSize="7">Mgr</text>
        <text x="225" y="193" fontSize="7">Mgr</text>
        <text x="295" y="193" fontSize="7">Mgr</text>
        <text x="355" y="193" fontSize="7">Mgr</text>
        <text x="425" y="193" fontSize="7">Mgr</text>
        <text x="485" y="193" fontSize="7">Mgr</text>

        {/* Engineer leveling ladder — the absurdity */}
        <text x="35" y="237" fontSize="7">Principal</text>
        <text x="35" y="281" fontSize="7">Staff</text>
        <text x="35" y="325" fontSize="7">Senior</text>
        <text x="35" y="364" fontSize="6.5">Junior</text>
      </g>

      {/* Bracket annotation showing depth */}
      <path
        d="M72 224 L78 224 L78 374 L72 374"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
        fill="none"
      />
      <text
        x="88"
        y="300"
        fill="currentColor"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7"
        opacity="0.3"
        dominantBaseline="central"
      >
        x8 mgrs
      </text>

      {/* Figure label */}
      <text
        x="260"
        y="376"
        fill="currentColor"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7.5"
        textAnchor="middle"
        opacity="0.45"
      >
        Figure 0.1 &mdash; The Hierarchy
      </text>
    </svg>
  );
}
