export const TOPIC_META = {
  title: "Glossary",
  subtitle: "Key Terms and Definitions",
  description:
    "Definitions for key terms used throughout Slop Cannons: slop cannon, expert scaler, fire team, the compression, inherited complexity, and more.",
  slug: "glossary",
  keywords: [
    "slop cannon definition",
    "expert scaler definition",
    "fire team model",
    "compressed organization",
    "engineering org design glossary",
    "coordination overhead",
    "process theater",
  ],
};

export const GLOSSARY_ENTRIES: {
  term: string;
  definition: string;
  link?: string;
}[] = [
  {
    term: "Slop Cannon",
    definition:
      "A high-velocity builder who ships fast, iterates in public, and treats rough output as a feature, not a flaw. Paired with an Expert Scaler in a fire team. The name is deliberate -- most gatekeeping around code quality is a defense of slowness, not a defense of users. The slop cannon optimizes for learning speed and user-facing outcomes over internal polish.",
    link: "/slop-cannon",
  },
  {
    term: "Expert Scaler",
    definition:
      "The senior practitioner in a fire team who holds architectural context, system-level taste, and the judgment to know what should not be built at all. Not a manager. Not a reviewer. A force multiplier whose pattern recognition -- earned from years of building and breaking systems -- shapes the direction and quality of what the slop cannon produces.",
    link: "/expert-scaler",
  },
  {
    term: "Fire Team",
    definition:
      "The core operating unit of a compressed organization: one Expert Scaler paired with one Slop Cannon. Borrowed from military terminology where a fire team is the smallest unit that can operate independently. Loosely coupled to other teams, deeply stateful in their domain. Replaces the traditional squad or scrum team as the atomic unit of delivery.",
    link: "/fire-team-model",
  },
  {
    term: "The Compression",
    definition:
      "The ongoing collapse of software building cost driven by AI tooling. When building becomes an order of magnitude cheaper, coordination overhead becomes the dominant expense, exposing organizational structures that exist for legibility rather than value creation. The compression is not a future event -- it is happening now.",
  },
  {
    term: "Compressed Organization",
    definition:
      "An engineering organization redesigned for a post-compression world. Fewer layers, smaller teams, domain experts as builders, leadership redefined as taste and problem curation rather than status translation. Not a headcount reduction exercise -- a structural response to the new cost function of building software.",
  },
  {
    term: "Legibility vs Value",
    definition:
      "The tension between making work understandable to leadership and making work valuable to users. Most engineering organizations optimize for legibility -- dashboards, status reports, quarterly planning rituals -- at the expense of value. The compressed org inverts this priority: value to users first, legibility to leadership only where it does not slow delivery.",
  },
  {
    term: "Inherited Complexity",
    definition:
      "Organizational processes and structures that accumulated as rational responses to past constraints but persist after those constraints no longer exist. Approval chains from decade-old incidents, team splits driven by headcount thresholds, architecture review boards that no longer touch production. Distinguished from real complexity, which originates in the problem domain itself.",
    link: "/real-vs-inherited-complexity",
  },
  {
    term: "Domain Expert as Builder",
    definition:
      "The shift enabled by AI tooling where people with deep problem-domain knowledge -- compliance analysts, traders, operations specialists -- can build software directly rather than describing requirements to engineers. The person who understands the problem best becomes the person who builds the solution, collapsing the translation layer between need and implementation.",
  },
  {
    term: "Forcing Function",
    definition:
      "A constraint or event that compels organizational change that would otherwise be deferred. The compression is a forcing function: it makes coordination overhead visible by making building cheap enough that the overhead becomes the dominant cost. Organizations either respond to forcing functions or are restructured by competitors who did.",
  },
  {
    term: "Translation Layer",
    definition:
      "Any organizational role or process that exists primarily to convert information between people who do the work and people who evaluate the work. Program managers translating engineering status into executive dashboards. Product managers translating user needs into Jira tickets. Each layer adds latency and loses fidelity. The compressed org minimizes translation layers by putting decision-makers closer to the work.",
  },
  {
    term: "Coordination Overhead",
    definition:
      "The total organizational cost of synchronizing work across people, teams, and functions. Includes meetings, status updates, handoffs, approval chains, and alignment rituals. In traditional orgs, coordination overhead is accepted as the cost of doing business. In a compressed org, it is recognized as the dominant expense and actively minimized.",
  },
  {
    term: "Process Theater",
    definition:
      "Organizational rituals that create the appearance of rigor without improving outcomes. Sprint planning that produces estimates nobody uses. Architecture reviews that rubber-stamp decisions already made. Retrospectives that generate action items nobody tracks. Distinguished from legitimate process by a simple test: if you removed it, would the quality of what you ship change?",
  },
];
