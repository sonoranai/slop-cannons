export const TOPIC_META = {
  title: "Slop Cannon",
  subtitle: "The High-Velocity Builder",
  description:
    "Who qualifies as a Slop Cannon and who doesn't. Why rough is the method, not the mistake. What skill actually separates a Slop Cannon from someone who just writes bad code fast. The shipping cadence, the handoff package, and the costs that make the pairing with an Expert Scaler load-bearing.",
  slug: "slop-cannon",
  keywords: [
    "slop cannon",
    "high velocity builder",
    "MVP shipping cadence",
    "AI-assisted engineering",
    "handoff package",
    "domain expert builder",
    "rough prototype discipline",
    "engineering org design",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Tuesday morning. A reconciliation analyst at a payments company opens Cursor.`,

  `Her name is Maya. She has been filing tickets for eighteen months to get a break-detection tool built against the live ledger. This morning she gives up on the ticket queue. She describes the rule in plain English, pastes a few sample rows, corrects the model twice, and by lunch she has a working script against a staging copy of the ledger. By Thursday the Slack bot is posting mismatches to her channel at 7am. By Friday she has handed the thing to an engineer.`,

  `That is a Slop Cannon.`,

  `The name is deliberate. Rough is the method, not the mistake. The work looks unfinished because the idea is still being proven. Ship it anyway. Most ideas are wrong. You want to find out before the calendar runs out, not after.`,

  `Defining what a Slop Cannon is requires first defining what it is not.`,

  `Not a junior engineer. A junior engineer is an inexperienced person on a traditional engineering track who gets gradually more responsibility as they develop. Some Slop Cannons are junior engineers. Many are not. The title has nothing to do with it.`,

  `Not a citizen developer. Citizen development promised non-engineers low-code or no-code tools that produced drag-and-drop apps. The ceiling was low on purpose. The tools could not step outside a narrow set of pre-built blocks. A Slop Cannon writes real software. It is fragile at first and production-grade within a week, because the model writes the code the Slop Cannon could always describe.`,

  `Not a hobbyist or weekend builder. A Slop Cannon ships into a real environment with real users and real consequences. The output is not a portfolio piece. It goes into production the moment it survives its first real day.`,

  `Not a prompt engineer. Prompting is one skill in the Slop Cannon's toolkit, not the job. The job is shipping working software quickly. Everything else, including prompting, is in service of that.`,

  `What actually qualifies somebody is three things. A precise understanding of a real problem. The willingness to put a half-finished thing in front of a user who will tell them what's wrong. The judgment to know when rough is enough and when it is not.`,

  `Precise problem understanding is what the Slop Cannon brings that engineering alone usually cannot. Maya knew the edge cases of payments reconciliation because the edge cases were her job. She did not need a discovery interview to find them. She did not need a product manager to translate her domain into engineering requirements. The translation step was the reason the tool took eighteen months to not get built.`,

  `The willingness to ship half-finished work is a cultural muscle most orgs actively train out of people. Code review standards. Definition of done. "Is this production-ready?" gates. These were defensible when shipping was expensive and mistakes were costly. They become a cage when shipping is cheap and feedback is the point.`,

  `Knowing when to stop is the hardest of the three. It is also what separates a Slop Cannon from someone who just writes bad code fast.`,

  `Here is what a week looks like.`,

  `Day 0. The person closest to the problem writes it in one plain-English sentence. No PRD. No epic. One sentence.`,

  `Day 1. A working happy-path against real-ish data. Not production. Not robust. Walk it through on a five-minute Loom and show it to whoever has to live with it.`,

  `Day 3. A second pass. Incorporate the thing the user actually asked for, which you did not know until they saw Day 1.`,

  `Day 5. A decision. Either a handoff package or a kill. Both are valid outcomes, and the speed of reaching either is what the whole cadence exists to protect.`,

  `The handoff package is concrete. A repo. A README that states the problem in one paragraph, the happy-path input and output, the known-broken cases the Slop Cannon did not handle, and one passing test that proves the happy path works end-to-end. A five-minute Loom of the thing in use. That is what lands on an Expert Scaler's desk, and it is what decides whether the idea lives.`,

  `There is a cost to working this way. An honest argument for the role names it.`,

  `Rough code carries real tech debt. Not every prototype stays a prototype. Some become production systems because they proved useful and the org never gave them the second pass they needed. If the Day-5 handoff decision is skipped, the Slop Cannon leaves behind systems that work until they don't and fail in ways the original builder is not around to diagnose.`,

  `Fragile systems can still lose real money. A reconciliation script that silently misses a class of mismatch will cost more than the engineering backlog entry it replaced. The speed gain is real. So is the downside when the speed is not paired with the second-pass engineering discipline.`,

  `Velocity can corrode trust with downstream teams. If the Slop Cannon's output lands on another team's plate without warning, without context, without handoff hygiene, the downstream team learns to route around the Slop Cannon entirely. That kills the loop the role depends on.`,

  `The balance is the pairing, and it runs both ways. A Slop Cannon's lack of deep technical knowledge is usually a feature, not a bug. It makes them ask questions an Expert Scaler alone would never ask. Sometimes the best version of an idea comes from the person who does not yet know why it "cannot" work. The Slop Cannon widens what the Expert Scaler considers buildable. The Expert Scaler keeps what the Slop Cannon imagines from dying on first contact with production. The Day-5 decision is made with an Expert Scaler in the room, reading the README, watching the Loom, asking which class of failure would hurt worst and whether the prototype handles it. Most prototypes should die on Day 5. That is the feature, not a failure. The ones that live get wrapped by the Expert Scaler into something that survives on-call.`,

  `A Slop Cannon does not have to be an engineer. The effective ones are often people who lived in the problem for years and never got the engineering bandwidth to fix it. Ops leads. Finance analysts. Compliance officers. Underwriters. The other common profile is an early-career engineer who carries subject-matter expertise from a previous life, or the drive to learn it fast. They know the edge cases without a discovery interview because the edge cases are their job. Pair them with a model that writes code and the gap between "I know what should exist" and "the thing exists" collapses to an afternoon.`,

  `Some Slop Cannons are staff engineers who have learned to stop polishing. Discipline, not decline. The muscle of shipping something you know is imperfect, trusting the feedback loop, and letting the result tell you whether the work is worth finishing is one the industry spent twenty years training senior engineers not to use.`,

  `Ship ugly. Hand it off. Go again.`,
];
