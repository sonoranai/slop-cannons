export const TOPIC_META = {
  title: "AI as Forcing Function",
  subtitle: "Why the Old Model Is No Longer Tenable",
  description:
    "What a forcing function actually is. What AI reveals about engineering orgs versus what it changes. A stopwatch on one concrete change, gate by gate, showing build at under 0.2% of total wall-clock. The counter-arguments worth taking seriously, and where the forcing function applies unevenly.",
  slug: "ai-forcing-function",
  keywords: [
    "AI forcing function",
    "coordination overhead",
    "engineering org transformation",
    "AI organizational change",
    "wall clock delivery",
    "build cost collapse",
    "approval gate economics",
    "engineering leadership AI",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Before the argument, define the term.`,

  `A forcing function is a constraint that compels change that would otherwise be deferred. An incident that finally gets the on-call rotation fixed. A regulator who forces a migration nobody wanted to do. A competitor who ships something and takes a third of your market in eighteen months. Forcing functions are rarely popular. They are events that make the cost of doing nothing higher than the cost of doing the hard thing.`,

  `AI is the current forcing function on engineering org design. Not because AI writes code. Because AI collapsed the cost of building by roughly an order of magnitude, and the apparatus built around expensive building is now visibly the dominant cost.`,

  `AI does not create new organizational problems. It makes existing ones impossible to ignore.`,

  `That distinction matters. The old org chart, the approval gates, the six-week path from insight to shipped change, the three directors between the engineer and the VP. None of that is new. It was there before ChatGPT. Before the transformer architecture. Before the first copilot plugin. The machinery was expensive and tolerated because the thing it was coordinating, building software, was more expensive.`,

  `AI is the mirror. The dysfunction is the reflection.`,

  `What does AI actually reveal?`,

  `It reveals that most new engineering work is a translation exercise. Someone close to a problem describes it, and a chain of intermediaries converts the description into specification, into architecture, into code. AI collapses that chain. The domain expert can describe the work in their own words and get a working prototype back. The chain that existed to bridge the translation gap is now bridging a gap that barely exists.`,

  `It reveals that most approval gates were defending against expensive failure, not any failure. An approval that takes nine days to schedule makes sense when the work it gates costs $400k of engineering time and weeks of risk exposure. It does not make sense when the work it gates costs $4k and can be reverted in fifteen minutes. The gate survived the cost collapse unchanged.`,

  `It reveals that most meetings existed to synchronize context between people who could have just been the same person in the first place. The product review where the PM presents what the engineer said to the designer who explains to the QA lead who adjusts what the PM presents next week. When AI lets a domain expert build the thing directly, the meeting loses its subject.`,

  `Here is what the reveal looks like with a stopwatch on it.`,

  `Pick a concrete change. Finance needs a new internal tool: a monthly revenue-reconciliation feature that pulls from the CRM, the billing system, and the ERP, flags exceptions for human approval, and posts the approved journal entry to the general ledger. Real product work. Touches auth, data pipelines, UI, and financial controls. Something a solo builder with AI can prototype against staging data in two to four hours.`,

  `In the traditional enterprise flow, the same change costs:`,

  `Ticket intake and triage: four days, next planning cycle. Design review slot: nine days, biweekly cadence. Security review queue: eleven days. Architecture review (if it touches auth or data boundaries): twenty-one days. QA cycle on the fortnightly train: seven days. Release train window: fourteen days.`,

  `Total wall-clock: eight to ten weeks. Build is under 0.2% of the total. Annnnndddd that wall-clock only starts once nothing higher-priority is ahead of it in the queue! More likely the item sits in the backlog long enough that it quietly becomes never. Nothing actually ships on a timeline like this!`,

  `AI makes the building fast. The organization makes the shipping slow.`,

  `The delta between those two speeds is the coordination tax, and AI just made it quantifiable.`,

  `Here is where the argument usually meets resistance. The counter-arguments are worth taking seriously.`,

  `First counter. AI cannot actually ship production code. The claim is overstated. Partially fair. AI cannot ship a distributed payment system on its own. AI can ship a specific reconciliation script against a staging ledger that proves the pattern, and a human in the review loop still decides whether to let that script into production. The argument is not that AI replaces the engineer. It is that AI collapses the initial build, and the collapsed build makes the rest of the pipeline visibly the bottleneck.`,

  `Second counter. Regulated industries cannot just move faster. The gates are required. Partially fair. Some gates are load-bearing in the regulatory sense. Some are not. The gate that exists because SOX actually requires a separation of duties is real. The gate that exists because a 2019 incident scared the Director of Compliance into adding a review step nobody reviews, including the Director of Compliance, is not. Regulated orgs have fewer degrees of freedom, not zero, and the fewer degrees they have are not reasons to leave the decorative gates in place.`,

  `Third counter. If we compress too fast we lose the institutional knowledge the layers hold. Fair, and the argument most worth taking seriously. Middle management does hold knowledge. The history of why a decision was made, the personalities involved, the compromises baked into a system. Compression done badly loses that. Compression done well transfers it into runbooks, decision logs, architecture notes, the stream briefs a compressed org uses to move context between pairs. The knowledge is not inherently tied to the hierarchy. It is tied to the person, and the person's job can be restructured around making the knowledge legible without the hierarchy.`,

  `The balance is that AI as a forcing function applies unevenly. It hits hardest where the work is pure knowledge work with low regulatory friction. Product engineering. Internal tools. Operations automation. Data work. It hits softer where the work involves deep operational maintenance, long regulatory cycles, or heavy dependency on established stakeholder relationships. The forcing function is still there in those places. It just moves slower.`,

  `The organizations most at risk are not the ones that fail to adopt AI tools. Tools are easy. You can buy seats, run pilots, publish an internal AI strategy deck, check every box. The organizations most at risk are the ones that adopt the tools without changing the structure the tools expose as unnecessary. They get the productivity bump on the writing-code step and keep all the other steps exactly as they were. They optimized the cheapest part of the pipeline and left the bottleneck untouched.`,

  `The forcing function is not a future event. It is the current gap between what small, well-structured teams are shipping and what large, legacy-structured organizations are producing with five times the headcount. Every quarter the gap widens, the case for the old model weakens.`,

  `AI did not replace anyone. It revealed which structures were never load-bearing.`,
];
