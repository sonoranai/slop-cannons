export const TOPIC_META = {
  title: "Glossary",
  subtitle: "The Working Vocabulary",
  description:
    "The vocabulary is load-bearing. Every term here is a wedge, not a description. Organized by the role each word plays in the argument: the force, the structure, the diseases, the mechanics.",
  slug: "glossary",
  keywords: [
    "slop cannon definition",
    "expert scaler definition",
    "fire team model",
    "compressed organization",
    "malinvestment",
    "calibration theater",
    "structured exhaust",
    "engineering org design glossary",
  ],
};

export const GLOSSARY_INTRO =
  "This is not a dictionary. These are claims. The vocabulary is load-bearing, and every term is a wedge, not a description. If a definition here reads like Wikipedia, it failed.";

export const CLUSTER_ORDER = [
  "The Force",
  "The Structure",
  "The Diseases",
  "The Mechanics",
] as const;

export type Cluster = (typeof CLUSTER_ORDER)[number];

export const GLOSSARY_ENTRIES: {
  term: string;
  cluster: Cluster;
  definition: string;
  link?: string;
}[] = [
  // The Force
  {
    term: "The Compression",
    cluster: "The Force",
    definition:
      "Building software is collapsing in cost. Coordination is not. Whatever existed to make work legible upward now stands exposed as the dominant expense. It is happening now.",
    link: "/compressed-organization",
  },
  {
    term: "Forcing Function",
    cluster: "The Force",
    definition:
      "Reality arriving whether you scheduled it or not. Organizations respond to forcing functions or get restructured by the ones that did. AI is the current one on engineering org design.",
    link: "/ai-forcing-function",
  },
  {
    term: "Malinvestment",
    cluster: "The Force",
    definition:
      "The hierarchical instinct to grow scope and headcount without moving revenue, valuation, or user outcomes. In the old org it was invisible. In the compressed org, the exhaust makes it loud.",
  },

  // The Structure
  {
    term: "Fire Team",
    cluster: "The Structure",
    definition:
      "Two people. One pair. The smallest unit that can ship something real without asking permission. An Expert Scaler and a Slop Cannon, deployed across streams, recomposed when the problem changes.",
    link: "/fire-team-model",
  },
  {
    term: "Expert Scaler",
    cluster: "The Structure",
    definition:
      "Holds the architecture in their head and knows what not to build. Not a manager. Not a reviewer. Pattern recognition earned by breaking systems. Widened by a Slop Cannon who proposes things the Expert Scaler alone would never ask for.",
    link: "/expert-scaler",
  },
  {
    term: "Slop Cannon",
    cluster: "The Structure",
    definition:
      "Ships rough, fast, in public. A creative waterfall, often from outside engineering, unburdened by what the stack supposedly cannot do. The lack of deep technical knowledge is part of what makes them valuable. Paired with an Expert Scaler who keeps the ideas from dying on first contact with production.",
    link: "/slop-cannon",
  },
  {
    term: "10x Engineer",
    cluster: "The Structure",
    definition:
      "A preview of the fire team. One person who held both halves, taste and velocity, and delivered what the old org could not process. The industry called them anomalies. They were early.",
  },
  {
    term: "The Compressed Organization",
    cluster: "The Structure",
    definition:
      "The structural response to a post-AI cost function. Fewer layers. Smaller units. Experts who build. Leaders who curate problems and taste instead of translating status. Not a layoff. A resizing.",
    link: "/compressed-organization",
  },

  // The Diseases
  {
    term: "Career Ladder",
    cluster: "The Diseases",
    definition:
      "Not a development tool. An organizational self-portrait. It persists because the org needs to see itself, not because it builds people.",
  },
  {
    term: "Legibility vs Value",
    cluster: "The Diseases",
    definition:
      "Most orgs optimize for being understood by leadership. The compressed org optimizes for being useful to users. These goals compete more often than anyone admits.",
    link: "/legibility-vs-value",
  },
  {
    term: "Process Theater",
    cluster: "The Diseases",
    definition:
      "Ceremony that produces the appearance of rigor and no change in outcome. Sprint planning nobody follows. Reviews that rubber-stamp decisions already made. The test: if you removed it, would the product be worse?",
  },
  {
    term: "Calibration Theater",
    cluster: "The Diseases",
    definition:
      "Careers negotiated by people who have never read the engineer's code. A closed room ratifying narratives assembled by managers about work they could not operate.",
  },
  {
    term: "Inherited Complexity",
    cluster: "The Diseases",
    definition:
      "Process that made sense once, and exists now because removing it would require someone to admit it outlived its purpose. Approval chains from a decade-old incident. Review boards whose members have not deployed in years.",
    link: "/real-vs-inherited-complexity",
  },
  {
    term: "Translation Layer",
    cluster: "The Diseases",
    definition:
      "Anyone whose job is to explain the work to someone who will never do it. Every layer adds latency and loses fidelity. Minimize.",
  },
  {
    term: "Coordination Overhead",
    cluster: "The Diseases",
    definition:
      "The cost of everyone agreeing on what everyone else is doing. Meetings. Updates. Handoffs. The traditional org calls it the price of doing business. The compressed org calls it the business.",
  },

  // The Mechanics
  {
    term: "Structured Exhaust",
    cluster: "The Mechanics",
    definition:
      "What a fire team leaves behind when it ships. Measurable signals of value created, captured in fields the business can evaluate. Replaces the middle manager's subjective interpretation of who contributed what.",
    link: "/incentive-alignment",
  },
  {
    term: "Domain Expert as Builder",
    cluster: "The Mechanics",
    definition:
      "The compliance analyst writes the compliance tool. The trader builds the trading interface. The translation layer between 'knows the problem' and 'ships the solution' collapses when the model generates code the domain expert could always describe.",
    link: "/domain-experts-as-builders",
  },
];
