export function FireTeam() {
  const streams = [
    { label: "Revenue", y: 270 },
    { label: "Product", y: 322 },
    { label: "Finance & Accounting", y: 374 },
    { label: "Operations", y: 426 },
    { label: "Customer Experience", y: 478 },
  ];

  const bandH = 42;
  const pods: [number, number][] = [
    [0, 110], [0, 240],
    [1, 170], [1, 400],
    [2, 130], [2, 360],
    [3, 200], [3, 450],
    [4, 140], [4, 370],
  ];
  const podW = 105;
  const podH = 36;

  return (
    <svg
      viewBox="0 0 640 580"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full h-auto"
    >
      {/* ═══ C-SUITE (top) ═══ */}
      <g>
        {["CEO", "CTO", "CFO", "CRO", "CCO"].map((title, i) => (
          <g key={title}>
            <rect x={115 + i * 82} y={20} width="68" height="22" rx="3" stroke="currentColor" fill="#FAF9F6" strokeWidth="0.8" />
            <text x={115 + i * 82 + 34} y="31" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" dominantBaseline="central">{title}</text>
          </g>
        ))}
        <line x1="115" y1="31" x2="525" y2="31" stroke="#4A90D9" strokeWidth="0.3" opacity="0.1" />
      </g>
      <text x="310" y="14" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" opacity="0.35">Senior Leadership</text>

      {/* ═══ C-SUITE → TRIAD ═══ */}
      <line x1="310" y1="42" x2="310" y2="72" stroke="#4A90D9" strokeWidth="0.7" opacity="0.35" />
      <polygon points="306,70 310,77 314,70" fill="#4A90D9" opacity="0.35" stroke="none" />
      <text x="310" y="60" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" textAnchor="middle" opacity="0.18">no translation layers</text>

      {/* ═══ ENGINEERING TRIAD ═══ */}
      <rect x="140" y="78" width="340" height="46" rx="6" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" opacity="0.25" />

      <rect x="155" y="88" width="90" height="26" rx="3" stroke="currentColor" fill="#FAF9F6" strokeWidth="1" />
      <rect x="265" y="88" width="90" height="26" rx="3" stroke="currentColor" fill="#FAF9F6" strokeWidth="1" />
      <rect x="375" y="88" width="90" height="26" rx="3" stroke="currentColor" fill="#FAF9F6" strokeWidth="1" />

      <line x1="245" y1="101" x2="265" y2="101" stroke="#4A90D9" strokeWidth="0.8" opacity="0.4" />
      <line x1="355" y1="101" x2="375" y2="101" stroke="#4A90D9" strokeWidth="0.8" opacity="0.4" />
      <circle cx="255" cy="101" r="2" fill="#4A90D9" stroke="none" opacity="0.5" />
      <circle cx="365" cy="101" r="2" fill="#4A90D9" stroke="none" opacity="0.5" />

      <g fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7.5" textAnchor="middle" dominantBaseline="central">
        <text x="200" y="101">Dir Eng</text>
        <text x="310" y="101">Dir Eng</text>
        <text x="420" y="101">Dir Eng</text>
      </g>

      <text x="310" y="138" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" opacity="0.4">Engineering Triad</text>

      {/* Triad annotation */}
      <text x="490" y="84" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5.5" opacity="0.25">
        <tspan x="490" dy="0">High-taste, high-trust leaders.</tspan>
        <tspan x="490" dy="8">Compose and decompose pods</tspan>
        <tspan x="490" dy="8">to highest and best use of</tspan>
        <tspan x="490" dy="8">engineering resources.</tspan>
      </text>

      {/* ═══ TRIAD → ORCHESTRATION LAYER ═══ */}
      <line x1="310" y1="145" x2="310" y2="170" stroke="#4A90D9" strokeWidth="0.8" opacity="0.35" />
      <polygon points="306,168 310,175 314,168" fill="#4A90D9" opacity="0.35" stroke="none" />
      <text x="370" y="160" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" opacity="0.2">subscribes</text>

      {/* ═══ GENERATIVE ORCHESTRATION & MONITORING LAYER ═══ */}
      <rect x="155" y="178" width="310" height="30" rx="4" stroke="currentColor" fill="#FAF9F6" strokeWidth="1.2" />
      <text x="310" y="193" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" dominantBaseline="central">
        Generative Orchestration &amp; Monitoring Layer
      </text>

      {/* ═══ ORCHESTRATION → PODS ═══ */}
      <g stroke="#4A90D9" strokeWidth="0.5" opacity="0.2">
        {pods.map(([si, px], i) => (
          <line key={i} x1={310} y1={208} x2={px + podW / 2} y2={streams[si].y} />
        ))}
      </g>

      {/* ═══ WORK STREAM BANDS ═══ */}
      {streams.map((s, i) => (
        <g key={i}>
          <rect x="0" y={s.y} width="640" height={bandH} fill="currentColor" opacity={i % 2 === 0 ? 0.05 : 0.03} rx="3" />
          <text x="8" y={s.y + bandH / 2 + 1} fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="7" opacity="0.25" dominantBaseline="central">
            {s.label}
          </text>
        </g>
      ))}

      {/* ═══ PODS ═══ */}
      {pods.map(([si, px], i) => {
        const py = streams[si].y + (bandH - podH) / 2;
        return (
          <g key={i}>
            <rect x={px} y={py} width={podW} height={podH} rx="4" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25" />
            <rect x={px + 4} y={py + 3} width={(podW - 12) / 2} height={podH - 6} rx="2" stroke="currentColor" fill="#FAF9F6" strokeWidth="0.7" />
            <rect x={px + podW / 2 + 2} y={py + 3} width={(podW - 12) / 2} height={podH - 6} rx="2" stroke="currentColor" fill="#FAF9F6" strokeWidth="0.7" />
            <circle cx={px + podW / 2} cy={py + podH / 2} r="2" fill="#4A90D9" stroke="none" />
            <text x={px + (podW - 8) / 4 + 4} y={py + podH / 2} fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" textAnchor="middle" dominantBaseline="central" opacity="0.7">ES</text>
            <text x={px + podW / 2 + 2 + (podW - 12) / 4} y={py + podH / 2} fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" textAnchor="middle" dominantBaseline="central" opacity="0.7">SC</text>
          </g>
        );
      })}

      {/* Composition boundary */}
      <rect x="100" y={streams[0].y - 6} width="255" height={bandH + 12} rx="7" stroke="#4A90D9" strokeWidth="1.2" strokeDasharray="6 3" opacity="0.3" />
      <text x="227" y={streams[0].y - 10} fill="#4A90D9" fontFamily="'JetBrains Mono', monospace" fontSize="6" textAnchor="middle" opacity="0.4">Composed: Pipeline Migration</text>

      {/* Tour of duty */}
      <path d="M500 342 C540 342, 550 430, 500 487" stroke="#4A90D9" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.25" />
      <text x="555" y="412" fill="#4A90D9" fontFamily="'JetBrains Mono', monospace" fontSize="5.5" opacity="0.3">tour of</text>
      <text x="555" y="420" fill="#4A90D9" fontFamily="'JetBrains Mono', monospace" fontSize="5.5" opacity="0.3">duty</text>

      {/* Legend */}
      <g opacity="0.3">
        <rect x="500" y="272" width="44" height="14" rx="2" stroke="currentColor" fill="#FAF9F6" strokeWidth="0.6" />
        <text x="522" y="279" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" textAnchor="middle" dominantBaseline="central">ES</text>
        <text x="550" y="279" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" dominantBaseline="central">Expert Scaler</text>
      </g>
      <g opacity="0.3">
        <rect x="500" y="290" width="44" height="14" rx="2" stroke="currentColor" fill="#FAF9F6" strokeWidth="0.6" />
        <text x="522" y="297" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" textAnchor="middle" dominantBaseline="central">SC</text>
        <text x="550" y="297" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="5" dominantBaseline="central">Slop Cannon</text>
      </g>

      {/* ═══ FIGURE LABEL ═══ */}
      <text x="310" y="545" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="8" textAnchor="middle" opacity="0.4">
        Figure 0.3 — Composable Fire Teams
      </text>
    </svg>
  );
}
