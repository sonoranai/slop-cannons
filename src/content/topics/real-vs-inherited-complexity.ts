export const TOPIC_META = {
  title: "Real vs Inherited Complexity",
  subtitle: "The Diagnostic Filter",
  description:
    "Not all complexity is waste. Regulated environments, multi-region data residency, and cross-jurisdiction payments are genuinely complex. But most organizational complexity is inherited overhead defending its own existence.",
  slug: "real-vs-inherited-complexity",
  keywords: [
    "organizational complexity",
    "inherited complexity",
    "process overhead",
    "engineering org design",
    "coordination cost",
    "architecture review",
    "engineering efficiency",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Not all complexity is waste. This is the sentence most org-design thinkers skip, and it is the reason their advice breaks on contact with reality. Some domains are genuinely, irreducibly complex. If you process payments across seventeen tax jurisdictions, the tax logic is complex because the world is complex. If you operate in a regulated environment where data residency rules differ by region and change quarterly, the compliance layer is complex because the regulatory landscape is complex. No amount of organizational cleverness eliminates complexity that originates in the problem itself.`,

  `The mistake is treating all complexity as the same kind. I have spent fifteen years building systems in financial services -- prop trading, regulatory reporting, real-time risk engines processing billions of events. The complexity in those systems is real. You cannot simplify away the fact that a trade executed in one jurisdiction, cleared in another, and reported in a third has to satisfy three different sets of rules simultaneously. The person who looks at that and says "just simplify it" has never been on the receiving end of a regulatory audit.`,

  `But most of what passes for necessary complexity in engineering organizations is not that. It is inherited complexity -- structures and processes that accumulated over time, each one a rational response to a specific incident or constraint that may no longer exist. The team was split into three squads because headcount hit a threshold where some VP decided it needed a director, and directors need multiple teams. The approval chain for production deployments exists because someone pushed a bad config in 2019 and the postmortem recommended a review step, and nobody ever revisited whether the review step still makes sense now that the deployment pipeline has seventeen automated checks the 2019 pipeline did not.`,

  `Architecture review boards are the canonical example. I have seen ARBs that have not had a member touch production code in three years. They review designs on paper, add process gates, and require documentation that exists to satisfy the gate rather than to communicate anything useful. The designs that survive the ARB are not better designs. They are designs that are better at passing the ARB. Those are different things. The board becomes a filter that selects for legibility to non-practitioners, not for quality.`,

  `The diagnostic is simple enough that it fits on an index card: does this process increase the team's ability to create value for users? That is the only question. Not "does this process reduce risk" -- because risk reduction that costs more than the risk itself is just overhead with a safety narrative. Not "does this process create alignment" -- because alignment is only valuable if the people being aligned would otherwise go in different directions, and most of the time they would not because they talk to each other daily. The question is value creation. Full stop.`,

  `Apply this filter to every recurring meeting on your calendar. Every approval step in your deployment pipeline. Every cross-team synchronization ritual. Every document template that must be filled out before work begins. For each one, answer clearly: does this increase our ability to create value, or has it become overhead defending its right to exist? If you cannot answer clearly -- if the best you can manage is "well, it is important for visibility" or "we have always done it this way" -- you have inherited complexity masquerading as rigor.`,

  `The insidious thing about inherited complexity is that it feels like diligence. The people maintaining it are often genuinely well-intentioned. They believe the process is load-bearing. And sometimes they are right -- which is why you cannot just tear everything down. You have to diagnose. You have to distinguish between the compliance requirement that exists because regulators will shut you down and the compliance theater that exists because someone once got nervous. Between the architecture review that catches a genuine class of design flaw and the architecture review that rubber-stamps whatever the team was going to do anyway, but three weeks later.`,

  `In a compressed organization, inherited complexity is the silent killer. When your fire teams are small and fast, every unnecessary process gate has an outsized cost. A one-week approval delay that was barely noticeable when the team took six weeks to build now consumes a third of the entire delivery timeline. The leverage of removing inherited complexity is proportional to how fast your teams can move without it. As AI collapses building cost, the cost of organizational friction becomes the dominant constraint. Clean it up or it will define your speed regardless of how capable your builders are.`,
];
