export const TOPIC_META = {
  title: "Expert Scaler",
  subtitle: "The Deep-System Thinker",
  description:
    "How the Expert Scaler differs from a senior engineer, an architect, a staff engineer, or a manager. The four-read diagnostic run against every proposed build. The political and career costs of the role. When saying no stops being right.",
  slug: "expert-scaler",
  keywords: [
    "expert scaler",
    "systems architecture",
    "engineering judgment",
    "architectural taste",
    "technical leadership",
    "platform engineering",
    "design review",
    "prevention over production",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `The proposal looked sound for nine minutes.`,

  `Someone was pitching a notifications microservice. Its own database, its own queue, its own retry logic. The room was nodding. Then the Expert Scaler asked what was already in the outbox pattern in the billing service, and whether this new service would share that table or fork it. By the next question, the room had realized the whole proposal collapsed to a config change on an existing service. No new repo. No on-call rotation. One week of work instead of a quarter.`,

  `That is the move.`,

  `Defining the Expert Scaler requires first separating it from the roles it most resembles.`,

  `Not a senior engineer. A senior engineer owns a system and ships features in it. That is a career track, defined by years of experience and a leveling rubric. An Expert Scaler may be senior, may be staff, may not carry the title at all. The function is not about seniority.`,

  `Not an architect. An architect draws the diagram. They map what should exist and document how the pieces fit. Architects are often one step removed from the code. Expert Scalers stay close to the code and close to the production systems the code runs inside. The diagram is an input, not an output.`,

  `Not a staff engineer on a traditional project-leading track. Staff engineers lead initiatives, mentor mid-level engineers, and drive multi-quarter projects to completion. A good Expert Scaler may do some of that. The core job is different. It is preventing work, not leading it.`,

  `Not a manager. The Expert Scaler does not own people. They own judgment. Leadership decides who reports to whom. The Expert Scaler decides whether a proposed service boundary is in the right place, whether a migration path is safe, whether a team is about to build something that an existing system already does.`,

  `Call it a function, not a title. The Expert Scaler's most valuable output is often the thing that does not get built. A senior engineer owns a system. An architect draws the diagram. An Expert Scaler reads the diagram and tells you which box to erase.`,

  `The read is a sequence. Four questions, run against any proposed build, in this order.`,

  `Blast radius. What breaks if this is wrong in eighteen months? If the honest answer is "a short meeting and a revert," build it. If the answer is "we write off a data migration and lose customer trust for a quarter," the question is how you know the design is right before touching it.`,

  `Prior art. What already in our stack answers sixty percent of this? Most new services are old services the proposer has not read yet. The Expert Scaler is the reader who did.`,

  `Leaving. Which system absorbs this if the team owning it disbands next quarter? A service that cannot be handed off without the original builder in the room is a future incident. Design for the handoff.`,

  `Observability. How will we know this is working in production before a customer tells us? "We'll add logs" is not an answer. Name the signal, the threshold, and who gets paged when it trips.`,

  `Those four reads are most of the job run alone. The Expert Scaler does not work alone.`,

  `A Slop Cannon sits across the table. The Slop Cannon usually comes from outside engineering, or from early in an engineering career, often bringing subject-matter expertise the rest of the team does not have. They see the problem from the user's side, unburdened by what the stack is supposed to not do. Their ignorance of technical limits is a feature. It pushes the Expert Scaler to ask whether "cannot" actually means "has not yet," and to invent a version of the problem that is buildable instead of automatically erasing it. Sometimes the best ideas originate with the person who knows the least about software and the most about what value looks like to the person on the other end. The Slop Cannon is the creative waterfall that widens the Expert Scaler's read. Without that pairing, the Expert Scaler's instinct stays conservative and the stack stops getting new shape.`,

  `The other half of the job is shepherding. When a Slop Cannon's prototype earns its place, a Streamlit app against real data or a script that ran ten times in production without waking anyone, the Expert Scaler decides whether to wrap it in a service, absorb it into an existing one, or let it die. They do not rebuild. They wrap. They add the rollback, the alerting, the dependency pin, the failover the prototype did not need because no real money was flowing through it yet.`,

  `There is a cost to playing this role. An honest argument for the function names it.`,

  `The first cost is political. An Expert Scaler says no to a lot of proposed work. Not because they are contrarian. Because they are reading the proposal against the stack and seeing what the proposer did not. The proposer often had a promotion packet built around this project. A director wanted the scope for their quarterly narrative. Saying no costs relationships. Being right is not the same as being heard.`,

  `The second cost is career legibility. In a traditional org, leveling is pegged to scope. Ship more, lead more, get promoted. An Expert Scaler whose best work is preventing work does not ship more. They show up in retrospectives as the person who said no, and the counterfactual they saved rarely gets credit because the counterfactual is invisible.`,

  `The third cost is over-caution. Saying no is easier than saying yes. An Expert Scaler who never gets challenged drifts toward stasis. The stack calcifies. Every new proposal collapses to a config change on an existing system, until the existing system is doing too much and nobody can untangle it. The failure mode of a great Expert Scaler is becoming the person whose instincts quietly freeze the architecture.`,

  `Holding the balance is the whole skill. The Expert Scaler has to say yes often enough that the stack keeps evolving, and no often enough that it does not fork into twelve versions of the same thing. Getting the ratio right looks like this. A new proposal survives the four reads maybe one time in three. The one that survives gets built. The two that collapse get absorbed or killed, with the proposer learning something specific about the existing stack they did not know before. Nobody leaves the room angry. The stack stays knowable.`,

  `Pattern recognition is the compressed form of that judgment. It comes from building systems that worked and breaking ones that didn't, often the same system, often under load. No book teaches it. No certification certifies it.`,

  `Find the people who have the judgment. Give them the authority to use it. Accept the political cost of defending that authority when someone senior wants to route around it.`,
];
