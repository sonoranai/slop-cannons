# sonoranai dotfiles

portable claude code configuration for production-quality agentic workflows. drop into any project.

## stack

typescript, react, next.js, tailwind, shadcn/ui. playwright for e2e. vitest for unit/integration.

## commands

- `npm run dev` — start dev server
- `npm run lint` — eslint
- `npm run typecheck` — tsc --noEmit
- `npm test` — vitest
- `npm run e2e` — playwright

## anti-patterns — recognize and counter

1. **scope avalanche** — plan touches >3 files? decompose into atomic blocks first via /sci-compose
2. **context collapse** — at 60% context, /compact. at 70%, delegate to subagent. never push past 80%
3. **mock theater** — implement the real thing or explicitly tell the user you can't. never silently stub
4. **hallucination drift** — uncertain about an API or pattern? search docs/code first. never invent
5. **boilerplate gravity** — read docs/design-principles.md before any UI work. no template aesthetics
6. **test afterthought** — write the failing test before the implementation. always
7. **correction spiral** — 2 failed attempts? stop. diagnose root cause. ask the user if stuck
8. **kitchen sink session** — /clear between unrelated tasks. one context, one concern

## workflow

plan → test → implement → verify → commit. no skipping phases.

for multi-file features: use /sci-compose (outer loop decomposes, inner loop TDD per block).

## context protocol

- use subagents for research and exploration — keep main context clean
- progressive disclosure: skills load on-demand, not upfront
- prefer /clear over accumulating unrelated context
- when debugging: /sci-debug-loop. when reviewing: /sci-code-review

## further reading

**IMPORTANT:** read the relevant doc below before starting work in that domain:

- @docs/design-principles.md — typography, color, spacing, layout, motion
- @docs/security-baseline.md — OWASP, secrets, threat model, agentic security
- @docs/testing-strategy.md — unit vs integration vs e2e, coverage expectations
- @docs/api-conventions.md — REST patterns, error format, pagination
