export const TOPIC_META = {
  title: "Incentive Alignment",
  subtitle: "Systematic Compensation in the Compressed Organization",
  description:
    "Why calibration theater conflates incentive alignment with ritual. The concrete fields of a structured exhaust record, the comp math that resolves against it, and an honest catalog of what the system misses (mentorship, long-horizon bets, fuzzy attribution).",
  slug: "incentive-alignment",
  keywords: [
    "engineering compensation",
    "incentive alignment",
    "calibration theater",
    "structured exhaust",
    "value-based compensation",
    "engineering organization design",
    "eat what you kill",
    "malinvestment",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Here is a specific room most engineers will recognize.`,

  `Six managers. A printed spreadsheet. A projector showing a grid of engineers ranked by manager-submitted narratives. The room is behind a closed door with a nondisclosure requirement. The exercise is called calibration. What it actually does is ratify the raises, bonuses, and promotions those managers already allocated in side conversations with their own bosses. The room is a legitimization ritual for decisions made earlier, by fewer people, on less information than the room was supposed to weigh.`,

  `That is calibration theater. It is the clearest place to see what goes wrong when compensation is mediated by subjective interpretation.`,

  `Define the terms before the argument.`,

  `Calibration theater is the apparatus of calibration meetings, leveling rubrics, promotion packets, stack ranks, and the manager-narrative layer that converts an engineer's year of work into a score the HR system accepts. It has legitimate components. A good manager actually does know things about their reports that metrics cannot capture. The theater is what happens when the legitimate components get buried under six rounds of horse-trading in a room whose actual decision-making authority is ambiguous.`,

  `Incentive alignment is something different. It is the question of whether the rewards in the system (salary, bonus, equity, promotion, status) are paid out in proportion to the value the recipient created for the business. Not effort. Not availability. Not cultural contribution. Value. The thing the business can measure externally.`,

  `The traditional org conflates the two. It uses calibration theater as its primary mechanism for incentive alignment. That conflation is the problem.`,

  `The engineer who quietly saved the company six figures by killing a project that should never have been started gets the same rating as the one who shipped a feature nobody uses on time and under budget. The rubric cannot tell the difference. The manager might know. The system does not ask.`,

  `What works instead?`,

  `A fire team closes a piece of work and emits a structured object. Call it the exhaust record. It captures the work in terms the business can evaluate, independent of manager narration.`,

  `The fields of the exhaust record:`,

  `Work unit ID, dates, and pair members. What was done and by whom.`,

  `External product delta. What customer-facing capability exists now that did not before. Named. Tied to a revenue line, adoption metric, or customer feedback channel.`,

  `Internal tool delta. What internal capability exists now that did not before. Named. Tied to a named team that uses it, with a before-and-after on hours reclaimed or errors prevented.`,

  `Compounding intelligence delta. What dataset, model, dashboard, or analytic artifact persists and can be reused by the next pair. Named. Versioned. Discoverable.`,

  `Operational cost delta. Dollars saved, latency reduced, error-rate improved, headcount pressure relieved. Direction and magnitude.`,

  `Revenue surface delta. Any net new billable capability or pipeline attached.`,

  `Killed work. What projects were canceled, what spend never shipped, what scope got pulled back. This is the line the old org almost never captures, and it is often where the highest-leverage decisions live.`,

  `The exhaust record is not a self-evaluation. It is a documentation artifact. A pair either captures it at the end of a work unit or the work unit does not count for compensation purposes. The pair writes it. Leadership reviews it. Disputes get resolved by looking at the actual output, not by manager interpretation.`,

  `Now the comp math.`,

  `Base salary stays fixed, pegged to market for the role and seniority band. That floor protects the person from variance and keeps the system from collapsing into pure commission.`,

  `Variable comp resolves against the exhaust. An annual pool is sized as a percentage of captured value across all pairs, weighted by facet. The weights are set by the business before the period, not after. External product delta might carry weight 1.0. Internal tool delta, 0.6. Compounding intelligence, 0.8. Operational cost delta, 1.0. The weights reflect what the business is trying to grow this year.`,

  `A pair's share of the variable pool is proportional to their weighted contribution. Two people who shipped a pricing experiment that moved revenue 3% get a larger share than two people who shipped a dashboard nobody looked at, even if the dashboard took twice the engineering hours. Effort is not the unit. Captured value is the unit.`,

  `A worked example. Over a quarter, a fire team ships two items. A billing migration that reduces payment-processor fees by $180k annualized. An internal logging library that six other pairs adopt and collectively reclaim forty hours a week. The exhaust record captures both. Leadership assigns the billing migration to external product delta (weight 1.0, value $180k annualized) and the logging library to compounding intelligence (weight 0.8, value computed against the labor it reclaimed across adopters). The pair's variable pool share resolves against those numbers, not against a manager's year-end summary.`,

  `The anchor for this model is older than software.`,

  `Before engineering I spent years in sales. You booked a deal, you got paid for it. You did not book the deal, you did not get paid for it. The commission sheet on the wall was the weekly exhaust record. What you built was the relationship, what you closed was the revenue, what you earned was the pay. The deal existed in the CRM and the paycheck matched the CRM, minus or plus the specific deductions the contract defined. No ambiguity.`,

  `That clarity is what is missing from engineering compensation. Not because engineers should be paid like salespeople. Because the clarity is the thing, and the thing has been absent from engineering compensation for most of the industry's history.`,

  `Eat what you kill.`,

  `There is a cost to working this way. An honest argument for the model names it.`,

  `Some high-value work does not produce clean exhaust. Mentorship. Recruiting. Institutional memory preservation. A senior engineer who spends a quarter onboarding three new pairs is generating real value that the exhaust record does not capture directly. Either the comp system has a mechanism for this (a separate facet, with its own weight and measurement), or the system undervalues the work and it stops happening. Orgs that run exhaust-based comp without this provision discover within eighteen months that nobody mentors anyone anymore.`,

  `Long-horizon work is hard to measure inside a compensation period. A research bet that pays off in three years will show no exhaust in year one. Either the system defers recognition (a forward-looking facet evaluated at maturity) or it starves the bet. Amazon's working-backwards model and Google's 20% time were both attempts to solve this. Both are imperfect. The exhaust model has the same failure mode if the forward-looking facet is absent.`,

  `Collaboration across pairs can get undercounted. If two pairs jointly produce an outcome, the attribution has to be decided, and the decision creates political pressure. The simplest fix is to allow joint attribution on a single exhaust record. The harder fix is to trust leadership to allocate fairly when the boundaries are fuzzy. The system does not eliminate judgment. It bounds it.`,

  `The cold start problem is real. When there is no market for a new product area or internal capability yet, there is no obvious way to measure value. The fix is to define the facets broadly enough to capture exploratory work in early phases. Did this generate intelligence the org did not have before? Did it produce actionable signal? Then tighten the facets as the work matures and the value surface firms up.`,

  `The balance is that the exhaust model compresses subjective judgment where it drifted away from its load-bearing purpose, and keeps it where it genuinely matters. A calibration room deciding whether an engineer's mentorship of three new pairs counts as staff-level impact is doing real judgment work. A calibration room negotiating the difference between ratings because one manager advocated harder than another is theater. The exhaust model keeps the first and kills the second.`,

  `Most orgs will not adopt this cleanly. The people who would lose influence under the exhaust model are the people who decide whether to adopt it. That is the structural problem, and pretending otherwise would be dishonest.`,

  `The parts of an org that can adopt it will outperform the parts that cannot. That is the market argument, and it runs whether or not leadership approves.`,

  `Build the record. Ship it. Get paid for it. Move.`,
];
