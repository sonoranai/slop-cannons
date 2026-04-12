export const TOPIC_META = {
  title: "The Fire Team Model",
  subtitle: "The Atomic Unit of the Compressed Organization",
  description:
    "How fire teams work in the compressed org. Pairs of one Expert Scaler and one Slop Cannon form elastic, deployable units that replace traditional cross-functional teams with focused, high-velocity execution.",
  slug: "fire-team-model",
  keywords: [
    "fire team model",
    "engineering team structure",
    "compressed organization",
    "expert scaler",
    "slop cannon",
    "pair programming",
    "engineering org design",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `The basic unit of the compressed organization is the fire team. Two people. One Expert Scaler, one Slop Cannon. That is the atomic unit. Everything else -- streams, portfolios, organizational structure -- exists to support, deploy, and recompose these pairs.`,

  `Think of each fire team as a container. Elastic. Stateful in domain expertise but loosely coupled to any particular product or codebase. Deployed to the highest-value problem available this week. Recomposed when the problem changes or when a different pairing would be more effective. This is not anarchy. This is orchestration. The difference between the two is whether someone with taste is deciding where the containers run.`,

  `The Expert Scaler holds the architectural context. They see the system at scale. They know where the load-bearing decisions live, which abstractions are going to crack under pressure, and which feature requests are actually infrastructure problems in disguise. Their job is not to write all the code. Their job is to ensure the Slop Cannon builds the right thing, in the right place, with an architecture that will survive contact with production traffic.`,

  `The Slop Cannon builds. Fast. They take a problem definition, pair with AI tools, and produce working software at a velocity that would have been impossible three years ago. They are not junior in the pejorative sense. They are junior in the sense that the compressed org does not care how many years you have been in the industry. It cares whether you can see a problem, describe it clearly, build something that addresses it, and know when to stop polishing.`,

  `The pairing works because each half compensates for what the other lacks. The Expert Scaler without a Slop Cannon is an architect drawing blueprints nobody builds. The Slop Cannon without an Expert Scaler is a builder shipping fast in the wrong direction. Together they are the 10x engineer -- not a mythical individual, but a composition. The myth was always that one person could hold both deep systems context and relentless shipping velocity simultaneously. Some can. Most cannot. The fire team stops pretending and makes the split explicit.`,

  `Fire teams operate within streams of subject-matter expertise. A stream might be payments infrastructure, or compliance automation, or customer onboarding. The stream provides continuity of context -- the fire team knows the domain, the stakeholders, the failure modes, the history of decisions that led to the current architecture. But the team itself is not permanently assigned. If the payments stream has no high-value work this week and the onboarding stream has a critical problem, the fire team moves. The stream is the river. The fire team is the boat.`,

  `Recomposition is the mechanism that keeps this from becoming a static org chart with a different name. Every week, leadership evaluates where the highest-value problems are and whether the current fire team assignments are optimal. Sometimes a Slop Cannon who has been working in compliance needs to pair with a different Expert Scaler who has deeper context on a new regulatory requirement. Sometimes an Expert Scaler needs to work alone for a few days on a design problem before a Slop Cannon can be effective. The structure is not rigid. That is the point.`,

  `What makes this work in practice is trust and communication density. Two people do not need a standup. They do not need a Jira board. They do not need a program manager to track their dependencies. They talk. They share a screen. They make a decision and move. The coordination overhead that destroys velocity in traditional teams -- the standups, the sprint ceremonies, the cross-team alignment meetings, the dependency tracking spreadsheets -- evaporates when the unit of execution is two people who are already aligned because they are sitting next to each other.`,

  `The fire team model is not a thought experiment. I have run teams this way. The output difference is not incremental. It is structural. A fire team producing working software in days that would have taken a traditional squad weeks is not an exaggeration. It is the natural result of removing every layer between a clear problem and the people capable of solving it.`,
];
