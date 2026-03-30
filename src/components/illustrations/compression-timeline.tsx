export function CompressionTimeline() {
  const nodes = [
    { id: "sales", label: "Sales", x: 65, y: 45 },
    { id: "finance", label: "Finance", x: 190, y: 30 },
    { id: "ops", label: "Operations", x: 315, y: 45 },
    { id: "support", label: "Support", x: 55, y: 115 },
    { id: "product", label: "Product", x: 190, y: 105 },
    { id: "syseng", label: "Systems Eng", x: 325, y: 115 },
    { id: "software", label: "Software Eng", x: 120, y: 175 },
    { id: "leadership", label: "Leadership", x: 270, y: 175 },
  ];

  const edges: [string, string][] = [
    ["sales", "finance"],
    ["sales", "support"],
    ["sales", "product"],
    ["finance", "ops"],
    ["finance", "sales"],
    ["ops", "syseng"],
    ["ops", "finance"],
    ["support", "product"],
    ["support", "software"],
    ["product", "software"],
    ["product", "syseng"],
    ["product", "leadership"],
    ["syseng", "software"],
    ["syseng", "ops"],
    ["software", "leadership"],
    ["software", "sales"],
    ["leadership", "product"],
    ["leadership", "ops"],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const R = 10;
  const ARR = 5;

  function edge(fromId: string, toId: string) {
    const f = nodeMap[fromId], t = nodeMap[toId];
    const dx = t.x - f.x, dy = t.y - f.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    const nx = dx / d, ny = dy / d;
    return {
      x1: f.x + nx * R, y1: f.y + ny * R,
      x2: t.x - nx * (R + ARR), y2: t.y - ny * (R + ARR),
      ax: t.x - nx * R, ay: t.y - ny * R,
      nx, ny,
    };
  }

  return (
    <svg
      viewBox="0 0 390 210"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full h-auto max-w-2xl mx-auto"
    >
      {edges.map(([f, t], i) => {
        const { x1, y1, x2, y2, nx, ny, ax, ay } = edge(f, t);
        const px = -ny, py = nx;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A90D9" strokeWidth="0.6" opacity="0.35" />
            <polygon
              points={`${ax},${ay} ${ax - nx * ARR + px * 2.5},${ay - ny * ARR + py * 2.5} ${ax - nx * ARR - px * 2.5},${ay - ny * ARR - py * 2.5}`}
              fill="#4A90D9" opacity="0.35" stroke="none"
            />
          </g>
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={R} stroke="currentColor" strokeWidth="1" fill="#FAF9F6" />
          <text
            x={n.x} y={n.y + R + 11}
            fill="currentColor" fontFamily="'JetBrains Mono', monospace"
            fontSize="6.5" textAnchor="middle" opacity="0.6"
          >
            {n.label}
          </text>
        </g>
      ))}

      <text x="195" y="207" fill="currentColor" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" textAnchor="middle" opacity="0.35">
        Figure 0.2 — Lattice Work &gt; Specialization
      </text>
    </svg>
  );
}
