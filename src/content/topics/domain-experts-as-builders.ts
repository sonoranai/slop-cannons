export const TOPIC_META = {
  title: "Domain Experts as Builders",
  subtitle: "The Biggest Unlock in Applied AI",
  description:
    "What qualifies somebody as a domain expert, and why pairing one with AI produces a Minimum Valuable Project (MVaP) that traditional discovery can't match. A named vignette of a compliance analyst shipping in an afternoon, plus what the pattern costs in production risk, governance, and engineering identity.",
  slug: "domain-experts-as-builders",
  keywords: [
    "domain experts building software",
    "AI for non-engineers",
    "citizen development",
    "low-code no-code",
    "engineering as amplifier",
    "Minimum Valuable Project",
    "applied AI organization",
    "domain-driven development",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `The most overhyped promise in applied AI is making engineers twenty percent faster.`,

  `If your best move with the most significant shift in software capability in a generation is shaving a day off a sprint, you have misread the opportunity. The real unlock is not accelerating the people who already build. It is arming the people who never could.`,

  `Before the argument, define the term.`,

  `A domain expert is a person who has spent years inside a specific business problem and understands it at a depth that generalists cannot replicate by reading documentation or running a discovery session. A compliance analyst knows which classes of document trigger which manual review cycles and why. Ask an underwriter about the combinations of applicant signals worth overriding the model on, and they can name them from memory. The operations lead who has run the fulfillment pipeline for four years can tell you which three steps cause the escalations and which of those three the support team already has a workaround for. Domain experts are not unskilled people waiting for an engineer to save them. They are experts, in a domain, who have been unable to turn their expertise into running software because the tools required a different expertise they did not have.`,

  `AI changes that.`,

  `Defining what this is not matters, because the skeptical reader will pattern-match it to failed precedents.`,

  `Not citizen development. Citizen development gave non-engineers drag-and-drop blocks and called the ceiling empowerment. The tools could not step outside their pre-built primitives. A person with a real problem hit the ceiling in a week and went back to filing tickets. A domain expert working with AI writes real software. It is fragile at first and production-grade within a week, because the model generates code the domain expert could always describe but never write.`,

  `Not low-code. Low-code abstracts complexity by hiding it. Same primitives, packaged more simply. A domain expert working with AI is generating real code, in a real language, running on real infrastructure. The complexity is not hidden. It is just handled by a different kind of collaborator.`,

  `Not no-code. No-code had a lower ceiling than low-code. The gap between "real software" and "no-code app" was real, even when the vendors pretended otherwise.`,

  `A real example of the new model.`,

  `A compliance analyst at a mid-market lender had been filing tickets for eighteen months to get a sanctions-screening exception queue built. The engineering backlog was full of revenue-adjacent work. The compliance request sat. One afternoon, the analyst opened Claude, described the exception rules in plain English, pasted a few sample rows of the daily OFAC delta file, and iterated. By Thursday of the same week she had a working Streamlit app that pulled the daily OFAC delta, reconciled it against the customer book, and flagged the twelve rows a human actually needed to look at. Monday morning her team stopped spending three hours on a spreadsheet. By Friday, engineering was hardening the app behind auth and monitoring.`,

  `That is the unlock. Not a faster engineer. A compliance analyst who shipped a thing her team had been asking for for a year and a half, in an afternoon, and a platform team that picked it up and made it durable.`,

  `The economic logic is straightforward. In the old model, every business problem had to pass through a translation chain. Domain expert describes the problem to a product manager. Product manager writes a spec. Spec goes to engineering. Engineering interprets the spec, builds something, ships it, and the domain expert says that is not quite right. Three months and six handoffs to learn something the domain expert could have demonstrated in an afternoon. Each handoff loses fidelity. Each layer adds latency. The chain is not malicious. It is expensive, and AI makes the expense visible by showing what happens when you skip it.`,

  `What gets built is not a minimum viable product in the usual sense. It is a Minimum Valuable Project (MVaP). The distinction matters. An MVP built by someone who does not understand the domain tests the wrong assumption half the time. An MVaP, built by the person who has lived inside the problem, hits the right assumption on the first try more often than any discovery interview.`,

  `They do not need to discover the user's pain. They are the user. They have the pain.`,

  `Engineering's role changes. Not disappears. Changes.`,

  `Engineering stops being the gatekeeper who decides what gets built and when. Engineering becomes the amplifier. The team that takes what a domain expert shipped in a day and makes it reliable, observable, maintainable. The team that builds the platform layer so that a hundred domain experts can build a hundred small tools without each one becoming a liability. That is a harder job than writing CRUD endpoints. It requires architectural taste, systems thinking, and the judgment to know when a rough prototype deserves investment and when it should stay disposable.`,

  `There is a cost to working this way. An honest argument for the model names it.`,

  `Production risk goes up before it goes down. Domain experts shipping to sandbox is safe. Domain experts shipping to production without governance is not. Before the model scales, the org has to define what "ready for production" looks like for a tool built by a non-engineer. Who reviews it. What monitoring is required. When rollback is automatic. These are new patterns, and orgs that expect the old engineering review process to apply get burned on the first serious incident.`,

  `Tech debt compounds. A rough tool built in an afternoon that becomes load-bearing infrastructure by month two is tech debt. Not every tool will get the platform-team polish. Some should die. The org needs a cull cycle, or it accumulates fragile systems that work until they don't and fail in ways the original builder is not around to diagnose.`,

  `Training is a new category of work. Not training on the tools. Training on the judgment. A domain expert who has never shipped software does not instinctively know when a rough tool is safe to release, when to add a confirmation step, when to keep a human in the loop. That judgment is learnable, and learning it is faster than teaching someone to code from scratch, but it is not zero. Orgs that skip this stage discover that a technically-skilled domain expert is not the same as a production-ready builder.`,

  `Engineer identity shifts. An engineer whose self-worth is tied to being the person who translates between domain and system becomes less central when the domain expert can do some of the translation themselves. That identity shift is real and personal. The engineer who leans into the amplifier role finds it more leveraged than the gatekeeper role ever was. The engineer who resists it slowly becomes the thing the compression is coming for.`,

  `The balance is honest about what domain experts cannot do alone. Complex distributed systems. Deep infrastructure. Regulatory-grade data pipelines. Auth and access control. Anything where the failure mode is "we lose customer data" or "the system breaks the SOX chain" stays squarely in the hands of engineers who know that territory cold. The domain expert ships the edge. Engineering holds the core. The platform team makes the edge-to-core contract explicit so the edges do not have to know the core is there.`,

  `The companies that move fastest on this will not be the ones with the biggest AI budgets. They will be the ones that find their best domain experts, hand them real tools, teach them when to stop, and build the platform layer so the output does not become a liability.`,

  `The ones that treat AI as a technology initiative will build a chatbot nobody opens twice.`,

  `The ones that treat it as an organizational unlock will build a workforce that was not possible before.`,
];
