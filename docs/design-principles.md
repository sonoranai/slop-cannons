# design principles

the aesthetic reference for all UI work. read this before creating or reviewing any visual component.

## philosophy

constraint-driven design. every decision narrows the possibility space toward clarity. we don't decorate — we communicate. the goal is the quiet confidence you see on stripe.com and anthropic's docs: nothing extra, nothing missing.

## typography

- **type scale**: 12 / 14 / 16 / 18 / 24 / 32 / 48 — no intermediate values
- **body minimum**: 16px. never smaller for readable content
- **line height**: 1.5 for body, 1.2 for headings
- **measure**: 65-75 characters per line. use `max-width` on prose containers
- **weight hierarchy**: 400 regular, 500 medium, 600 semibold, 700 bold. no more than 3 weights per page
- **pairing**: one serif for editorial, one sans for interface. never more than two families
- **headings**: 600-700 weight. size difference between levels should be perceptible but not dramatic

## color

derived from stripe's CIELAB methodology — perceptually uniform, predictably accessible.

- **contrast**: 4.5:1 minimum for body text (WCAG AA). 3:1 for large text and icons
- **predictable pairing**: any two colors separated by 5 levels guarantee small-text contrast. 4 levels for large text
- **semantic tokens**: primary, secondary, destructive, muted, accent. never use raw hex values in components
- **dark mode**: desaturate by 10-15%. reduce contrast slightly to avoid eye strain. invert surface hierarchy
- **no color-only meaning**: always pair color with text, icon, or pattern for colorblind users

## spacing

- **base unit**: 4px. all spacing is a multiple: 4, 8, 12, 16, 24, 32, 48, 64
- **component padding**: 8px minimum internal, 16px standard
- **touch targets**: 44x44px minimum (iOS HIG, WCAG 2.5.8). 8px minimum between targets
- **whitespace as hierarchy**: more space = more importance. group related elements tighter than unrelated ones
- **page margins**: 16px mobile, 24px tablet, 32px+ desktop

## layout

- **mobile-first**: write mobile styles as default, enhance with `min-width` queries
- **breakpoints**: 640 / 768 / 1024 / 1280 / 1536 — match tailwind defaults
- **max content width**: 1280px for app layouts, 720px for prose
- **no horizontal scroll**: ever. test at 320px viewport width
- **grid**: 12-column for complex layouts, single-column for content
- **container queries**: prefer over media queries for component-level responsiveness

## motion

- **duration**: 150ms for micro-interactions (hover, toggle). 300ms for transitions (expand, slide). never exceed 500ms
- **easing**: ease-out for entrances, ease-in for exits, ease-in-out for state changes
- **properties**: only animate `transform` and `opacity`. these are GPU-composited and won't cause layout thrashing
- **respect preferences**: always check `prefers-reduced-motion`. disable non-essential animation when set
- **purposeful motion**: animation must communicate state change, direct attention, or provide feedback. decorative animation is noise

## anti-patterns

- **gradient overuse** — gradients are seasoning, not the dish. one per page maximum
- **decorative animation** — if removing the animation loses no information, remove it
- **template aesthetics** — if it looks like a bootstrap dashboard or a generic SaaS template, start over
- **color soup** — more than 5 colors on a single view means the hierarchy is broken
- **font collection** — more than 2 typefaces means the system is fighting itself
- **hero worship** — giant hero sections with stock photos are a sign of missing content strategy
