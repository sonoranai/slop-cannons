export const TOPIC_META = {
  title: "Applied AI Value",
  subtitle: "Getting Real Business Value from AI",
  description:
    "Why the efficiency framing is a ceiling. The tech-only path versus the org-only path, and why both fail for the same reason. What week 1, week 4, and week 12 of real AI-as-org-change look like, and how to measure at the boundary instead of counting seats.",
  slug: "applied-ai-value",
  keywords: [
    "applied AI",
    "AI business value",
    "AI transformation",
    "domain experts as builders",
    "AI organizational change",
    "boundary measurement",
    "AI adoption ROI",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `The AI conversation is stuck on efficiency. That is the small prize.`,

  `What most orgs mean when they say "AI value" is the same people doing the same things faster. Autocomplete for code. Summarization for documents. A chatbot that deflects support tickets the user could have self-served. These are real but small. They take the existing org structure as a fixed constraint and optimize within it. That is a ceiling.`,

  `The real unlock is organizational. When AI collapses the cost of building, the binding constraint stops being "how many engineers can we hire" and becomes "how many people in this company understand the problem well enough to describe a solution." Those are different constraints, and they favor different org structures.`,

  `Define the two paths before the argument.`,

  `The tech-only path treats AI as a vendor problem. The org buys seats, runs pilots, stands up an AI Center of Excellence staffed with people who have never shipped a product, and publishes a strategy document. The existing team structure, approval chain, and promotion ladder are held constant. AI is asked to optimize within that frame. The predictable outcome is a chatbot nobody uses on an internal page with declining traffic.`,

  `The org-only path treats AI as a restructuring excuse. The org reorganizes, creates new titles, writes manifestos about transformation, and hands everyone the same tools they had before. The VP of AI Transformation gives a keynote. Engineering still waits three weeks for a staging environment. The bottleneck moves six inches and is indistinguishable from where it was.`,

  `Both paths fail for the same reason. They change one variable. The unlock requires changing both.`,

  `This is what treating AI as a real organizational initiative looks like in practice.`,

  `Week 1. Leadership identifies three people in the org who describe problems with precision but do not write code. A compliance analyst who files tickets nobody reads. An operations lead who maintains a spreadsheet the business runs on. A finance operator who has been asking for a reconciliation tool for two quarters. Leadership pairs each of them with an engineer who can translate AI tooling into their workflow. The pair is given one week, no review cycle, and permission to ship into a sandbox environment.`,

  `Week 4. Two of the three ship something a user touches. Not a demo. A thing that replaces a ticket queue. A thing that kills a spreadsheet. A thing that lands a compliance report in a day instead of a week. Those two outcomes are captured, measured, and made visible. The third pairing stalled because the domain expert's problem was smaller than it looked from the outside. That is a valid outcome, and the team logs the learning.`,

  `Week 12. The domain experts who shipped are now deciding what to build next without routing through a product manager. The engineers who paired with them are building the platform layer those domain experts depend on: auth, observability, data contracts, rollback. The structure of the engineering org has quietly shifted. The bottleneck moved from "engineering throughput" to "domain expert bandwidth," and the org starts to look for the next layer of people whose deep knowledge has been waiting for a tool that meets them where they are.`,

  `Now the measurement question.`,

  `Default measurement tracks what the tools do. Tokens generated. Code suggestions accepted. Tickets deflected. Seats licensed. Pilots running. These are activity metrics. They tell you the tools are being used. They tell you nothing about whether anything became more valuable for the user.`,

  `Correct measurement happens at the boundary where the system meets the customer or the internal user. Contrast the two lists.`,

  `Activity (tech-only): seats licensed, code suggestions accepted, tickets deflected by chatbot, pilots running, headcount on the AI team.`,

  `Boundary (org-change): non-engineers who shipped to production this month, time from "user has problem" to "user has fix" for a named workflow, approval gates removed this quarter, engineers repositioned from feature delivery to platform leverage, named artifacts in use by their original requester.`,

  `The left column is easy to collect and easy to defend. It tells leadership the initiative is moving. It does not tell anyone whether value was created.`,

  `The right column is harder to collect. It requires instrumentation at the point of use and honesty about whether the thing shipped was actually used. It also tells the truth.`,

  `If your team cannot answer "what became more valuable for a user this week" without referencing a Jira board, the measurement system is serving the org chart, not the user. Jira tracks activity. It tracks tickets moved across columns. That is useful for internal logistics and useless for understanding whether the company created value.`,

  `There is a cost to working this way. An honest argument names it.`,

  `The first cost is identity. Treating AI as org change asks people whose identity is tied to scarce knowledge to become enablers of distributed knowledge. An engineering leader who defined themselves as the translator between domain and system now becomes the person whose value is in platform leverage, not gatekeeping. That is a role shift, and role shifts are personal.`,

  `The second cost is comp. The compensation system was tuned for the old org. A domain expert who ships production tools has to get paid for doing it, or the behavior stops. An engineer who stops shipping features and starts building platform leverage has to be evaluated against a different rubric, or the behavior stops. Most orgs do not have the stomach to rewrite comp during a transition, and the transition stalls.`,

  `The third cost is governance. Letting a non-engineer ship into production requires new governance patterns. Who reviews the code? What monitoring is required? When is something robust enough to leave the sandbox? The answers exist, and they are not the same as the engineering review process the org currently runs. Standing up the new patterns is real work, and orgs that expect the old patterns to apply get burned on the first serious incident.`,

  `The balance is that AI-as-org-change hits fast where the work is pure knowledge work with low regulatory friction and hits slow where the work lives behind audits, safety requirements, or stakeholder chains that move on their own schedule. Product engineering, internal tools, operations automation, data work move first. Clinical systems, payments clearing, avionics move later and more carefully. The forcing function applies to both. The speed of the response will not.`,

  `The organizations that get this right will be uncomfortable. Uncomfortable with domain experts building things that used to require an engineering team. Uncomfortable with paying those domain experts differently because the work they now do is different. Uncomfortable measuring outcomes instead of activity, because outcomes are harder to game and sometimes the honest answer is "we did not create value this week."`,

  `That honesty is the foundation.`,

  `The models are cheap. The org is the work.`,
];
