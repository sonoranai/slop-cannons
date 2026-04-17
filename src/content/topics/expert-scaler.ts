export const TOPIC_META = {
  title: "Expert Scaler",
  subtitle: "The Deep-System Thinker",
  description:
    "The Expert Scaler's most valuable output is often the thing that does not get built. A four-question read against any proposed build. A senior engineer owns a system. An architect draws the diagram. An Expert Scaler reads the diagram and tells you which box to erase.",
  slug: "expert-scaler",
  keywords: [
    "expert scaler",
    "systems architecture",
    "engineering judgment",
    "architectural taste",
    "technical leadership",
    "platform engineering",
    "design review",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `The proposal looked sound for nine minutes.`,

  `Someone was pitching a notifications microservice. Its own database, its own queue, its own retry logic. The room was nodding. Then the Expert Scaler asked what was already in the outbox pattern in the billing service, and whether this new service would share that table or fork it. By the next question, the room had realized the whole proposal collapsed to a config change on an existing service. No new repo. No on-call rotation. One week of work instead of a quarter.`,

  `That is the move.`,

  `Call it a function, not a title. The Expert Scaler's most valuable output is often the thing that does not get built. A senior engineer owns a system. An architect draws the diagram. An Expert Scaler reads the diagram and tells you which box to erase.`,

  `The read is a sequence. Four questions, run against any proposed build, in this order.`,

  `Blast radius. What breaks if this is wrong in eighteen months? If the honest answer is "a short meeting and a revert," build it. If the answer is "we write off a data migration and lose customer trust for a quarter," the question is how you know the design is right before touching it.`,

  `Prior art. What already in our stack answers sixty percent of this? Most new services are old services the proposer has not read yet. The Expert Scaler is the reader who did.`,

  `Leaving. Which system absorbs this if the team owning it disbands next quarter? A service that cannot be handed off without the original builder in the room is a future incident. Design for the handoff.`,

  `Observability. How will we know this is working in production before a customer tells us? "We'll add logs" is not an answer. Name the signal, the threshold, and who gets paged when it trips.`,

  `Those four reads are most of the job. The rest is shepherding. When a Slop Cannon hands off a working prototype, a Streamlit app against real data or a script that ran ten times in production without waking anyone, the Expert Scaler is the person who decides whether to wrap it in a service, absorb it into an existing one, or let it die. They do not rebuild. They wrap. They add the rollback, the alerting, the dependency pin, the failover the prototype did not need because no real money was flowing through it yet.`,

  `Pattern recognition is the compressed form of that judgment. It comes from building systems that worked and breaking ones that didn't, often the same system, often under load. No book teaches it. No certification certifies it. Find the people who have it. Give them the authority to say no.`,
];
