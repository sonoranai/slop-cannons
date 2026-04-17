export const TOPIC_META = {
  title: "The Fire Team Model",
  subtitle: "The Atomic Unit of the Compressed Organization",
  description:
    "Why two people is the right number, not one and not three. How a fire team differs from a squad, a pod, a two-pizza team, or a guild. The stream brief that replaces the standup. The routing cadence that replaces intake triage. And what fire teams are genuinely bad at.",
  slug: "fire-team-model",
  keywords: [
    "fire team model",
    "engineering team structure",
    "compressed organization",
    "pair shipping",
    "stream brief",
    "engineering routing",
    "engineering org design",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Two people is the smallest number that can ship.`,

  `A fire team is a pair. One Expert Scaler, one Slop Cannon. They hold one problem for a week or two, ship the thing, and recompose against the next. That is the unit. Everything around it (leadership, streams of practice, routing) exists to feed pairs and move them, not to coordinate them internally.`,

  `Defining a fire team requires separating it from the structures it most resembles.`,

  `Not a squad. A squad has a product manager, an engineering manager, three to six engineers, a designer, and a dedicated QA person or two. A squad has rituals. A squad has its own standing agenda. A fire team has none of that. Two people sharing a screen do not need a PM to prioritize their work. They have already prioritized by agreeing to take the problem.`,

  `Not a pod. A pod is a branded squad with five to eight members and a mission statement. It carries most of the squad's overhead plus an extra layer of identity. A fire team has no mission statement. It has the problem it is working on right now.`,

  `Not a two-pizza team. Amazon's two-pizza rule was a ceiling on team size to prevent communication overhead from crushing velocity. A two-pizza team is still six to ten people. A fire team is smaller by an order of magnitude and treats even the two-pizza size as already too much coordination.`,

  `Not a guild. Guilds are horizontal alignments across teams where practitioners of a discipline share context. Guilds are useful, and the compressed org keeps them. They do not ship. They give fire teams a shared pool of practice to draw from and contribute back to.`,

  `A fire team is two people and one problem. Full stop.`,

  `Why two? Why not one? Why not three?`,

  `Not one, because sustained quality on real software takes two kinds of attention. One attention is building. Moving forward through the work, producing the next artifact, maintaining momentum. The other attention is architectural skepticism. Stopping, reading the shape of what just got built, asking whether it survives the second pass. One person can do both, but not well and not simultaneously. The industry spent two decades calling the people who could hold both "10x engineers" and treating them as anomalies. They were early. The pair is the same capability, made reliable.`,

  `Not three, because the third person introduces coordination overhead out of proportion to the output gain. Three people need to talk to each other, not just to the work. Decisions get debated instead of made. The shared-screen intimacy of two becomes a round-trip meeting. The third also creates a subtle political problem. When two of three disagree, the third becomes the swing vote, and the swing vote becomes a power position the role was not designed for.`,

  `Two is the number where two people can hold a full context between them and still move at the speed of one. The pairing is intimate. It is not anonymous. Most fire teams pair the same two people for at least a week at a time, because that is how long it takes to sync deeply enough that the pair is operating as one extended brain.`,

  `The Expert Scaler holds the architecture in their head. The blast radius, the failure modes, the prior art. They read the proposal against the stack. They say which box to erase.`,

  `The Slop Cannon ships. They take the problem and produce working software against real or realistic data within a day. They write the README, record the Loom, hand the package to the Expert Scaler for the second pass.`,

  `They are not a boss-and-worker pair. They are two halves of one unit. The Expert Scaler brings the deep technical read. What the stack can do, what it shouldn't, what is already there. The Slop Cannon brings a creative waterfall, often from outside engineering, unburdened by what supposedly cannot be built. They see the problem from the user's side. Their lack of deep software knowledge is part of what makes them valuable. It pushes the Expert Scaler to ask whether "cannot" actually means "has not yet," and to invent a version of the idea that is buildable instead of automatically erasing it. The Slop Cannon widens what the Expert Scaler considers. The Expert Scaler keeps what the Slop Cannon imagines from dying on first contact with production. Alone, each half is narrower than either realizes.`,

  `Here is what a week looks like.`,

  `Monday. The pair is deep in payments reconciliation. A 3DS fallback failure rate has been climbing for three weeks. The Expert Scaler has pulled the telemetry and can name the two suspect code paths. The Slop Cannon opens a branch and starts building a shadow path that routes around the suspect code while logging what would have happened if the live path had succeeded.`,

  `Wednesday. Leadership sees a compliance filing deadline slip. The Slop Cannon gets reassigned to a compliance Expert Scaler who has regulatory context. The original Expert Scaler holds the payments thread solo for two days, writing the design doc the new pair will pick up Monday.`,

  `The document that travels between these moments is a five-hundred-word stream brief. Not a Jira ticket. Not a Confluence page. A short, human document that names the problem, the open decisions, the dead ends already ruled out, and the next three moves. The Expert Scaler writes it in twenty minutes. The receiving pair reads it first thing Monday. It replaces three standups and the sprint-planning meeting that would otherwise be needed to re-establish context.`,

  `Friday afternoon the pair writes the next brief. Monday someone else picks it up.`,

  `The routing mechanism is its own artifact. Every Monday, leadership reads the open stream briefs and a value-weighted queue of work. They route pairs against problems for the week. Any Expert Scaler can mark an item on the queue urgent. The meeting is thirty minutes. It replaces intake triage, capacity planning, and the weekly status round-trip a traditional org needs to move people between teams.`,

  `The stream is the river. The fire team is the boat.`,

  `There is a cost. An honest argument for the model names it.`,

  `Fire teams are weak at long-horizon projects. A migration that takes six months needs continuity of context a weekly recomposition breaks. The compressed org handles this by keeping a pair assigned to the long-horizon work for as long as it takes, explicitly. Compression is a default, not a law.`,

  `Fire teams struggle with multi-party coordination. When a change requires sign-off from legal, security, and compliance, the pair cannot just push through. The coordination is the work, and it is slow. Leadership has to own those dependencies, not the pair.`,

  `Fire teams lose redundancy. If one half of a pair is sick for a week, the work pauses. Traditional teams buffer against this with bench depth. Fire teams do not. The compressed org accepts the pause as the cost of operating lean.`,

  `Fire teams assume operating maturity. Two people shipping without a PM, without an EM, without a standing review cadence, have to self-govern. That is a skill, and not everyone has it on day one. New hires spend their first quarter paired with more experienced practitioners before taking a pair seat.`,

  `The balance is honest about the shape of the work. Fire teams ship faster than any squad ever shipped, when the work fits the model. When the work does not fit the model, the compressed org uses different shapes. Long migrations get dedicated pairs. Regulated gates get leadership to own the dependency chain. Heavy operational maintenance keeps stable rotations because stability is the point. The compressed org is not dogma. It is a default that knows its own exceptions.`,

  `Two people. One problem. One brief. Move.`,
];
