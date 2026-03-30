# PREFACE

The director of security was seven minutes into her prepared remarks when she began her repeated misgendering of an engineering teammate who had transitioned three years before they had ever met each other. She had sharpened that knife. Everyone in the room knew it. No one said a word. She was close with a chief, and closeness with a chief was a currency that outranked productivity, the ability to do real work, human decency, and the forty-page values document that HR had distributed at the last all-hands. A document that espoused the culture and lived in a Slack channel with nine hundred and eighty members that hadn't seen a message since last October. Because, unironically, the head of HR had deemed any human who was not the head of HR unfit to post in the human resources Slack channel.

The company had launched a token the month before. A CRM platform that helped enterprises manage sales pipelines, customer data, and revenue operations had decided it needed a utility token. The CEO had watched a sitting president of the United States shill a memecoin from the Oval Office and decided that was permission. A rewards token. Earn it by closing deals. Spend it on premium analytics. Six weeks to ship. The compliance team got a slide deck. The slide deck said "regulatory alignment in progress." Nobody had called the lawyers. A CRM company was minting coins while its own engineers were filing expense reports through a system that crashed every other Friday.

The PM had opened the sync with his usual bingo card. OKRs. KPIs. SLAs. A P0 that had been a P0 for six weeks and would remain a P0 for six more because naming a thing is not the same as fixing it. Eyes glossed before his first run-on sentence ended. Half the C-suite was on the call. Not the half that made decisions. The half that enjoyed watching the levels beneath them nod.

Marc Aldrin sat in the third row. Coffee going cold. The mug was from GOTO Chicago in 2017, back when he still wrote code. He kept it the way someone keeps a photograph of a place they used to live.

He ran five engineering managers. Each of them ran five to ten engineers. Pipeline automation. Contact graph ingestion. Third-party integrations with every payments provider, marketing platform, and ERP that their enterprise clients demanded. Data residency compliance across forty countries with forty different privacy regimes, plus SOC 2 audits that nobody enjoyed and everybody needed. His teams' systems handled billions of messages daily and hadn't gone down in twenty-four months.

His boss spoke next. The Director of Engineering. Marc watched him the way you watch a weatherman describe sunshine during a flood. The DoE agreed the team had to do better. He did not say at what. He never did. Specificity would have required him to know what the teams were building, and knowing what the teams were building would have required him to attend a meeting that wasn't this one. He had a chief of staff who converted his abstractions into Jira epics. He had a calendar blocked with syncs he attended on mute. He requested headcount and asked the occasional question, always in front of the CTO, that proved he had read the executive summary of a document his chief of staff had summarized from a document an engineer had written.

He was a director of nothing. He directed nothing. He was a layer.

He mentioned a retrospective. Next Wednesday. A meeting in the future to discuss a meeting about a past failure. Leadership had read a snippet on X about better outcomes from documenting failures. Nobody mentioned that no one had read the last four postmortems. Nobody mentioned that the systemic issues those postmortems identified had never received a single resource for remediation. There was no time. There was a backlog of thirty-six months of feature work that the roadmap committee had approved, that the quarterly planning process had blessed, and that the organization would spend the next six weeks re-planning before declaring the plan obsolete by week two of execution.

The retrospective was not a solution. It was exhaust from a machine built so heavy with its tiers and so segmented by its self-imposed verticals that the weight of itself prevented any real value creation. But the failures would be documented for the next grand rearchitecture of the org chart coming in twenty-four months.

Marc knew all of this. He had known it for months. He had stood at whiteboards and written action items and assigned owners and watched the board go stale inside a week because the people who owned the actions were already drowning in the work they'd been assigned before the retrospective created more work about the work. He had done this a dozen times. He was good at it. He was good at every version of the job he had ever held.

He was starting to suspect that being good at this version of the job was the problem.

---

The stories in this book are fiction. They are drawn from real experience, mine and the people I have worked alongside for fifteen years. Some of it is exaggerated to prove a point. The way a golf instructor tells you to overcorrect until the new movement feels absurd, because the real swing lives between the old habit and the overcorrection. To find the new shape of an organization, you overshoot the old one. The scenes are fiction. The patterns are documentary.

This book is an indictment. Not of Marc. Not of the PM. Not of the DoE. Not of the director of security. They are operating rationally inside a system that rewards the wrong things.

The indictment is of the system.

A government contract wearing a hoodie. Directors promoted for growing teams, not for shrinking them. VPs celebrated for landing headcount, not for shipping with fewer people. A career ladder that exists so the organization can justify its own complexity to itself. Every rung a fiefdom. Every promotion a territorial expansion. Every calibration meeting a political negotiation. Conducted on behalf of engineers who are not in the room. By managers whose advancement depends on the outcome.

This is not one company. This is the industry.

Architecture review boards staffed by people who haven't touched production code in years, making decisions about systems they couldn't operate. Calibration meetings where careers are negotiated by people who have never read the engineer's code. Platform initiatives with eighteen-month timelines and success criteria so vague that failure is impossible because nobody defined success. Millions in headcount. Less value than one engineer with a clear problem and a week.

Fiefdoms built on proximity, on shared hobbies, kids at the same school, houses in the same neighborhood, that survive three reorgs because closeness outranks competence. Castles in the sky, justified by slides nobody challenges because challenging the slide means challenging the VP who commissioned it.

I have been good at this game and I have failed sensationally at the honesty. I have built ladders. I have run calibrations. I have defended headcount I suspected was overhead because the system rewarded the defense and punished the question.

I have been complicit.

Everyone in the industry sees this. Anyone under thirty recognized the absurdity on day one. The director with twenty years sees it. The VP who chairs calibrations sees it. Most are far enough along to accept it as the permanent cost of doing business. Mortgages. Vesting schedules. They have learned to call compliance what is actually complacency, and they will ride the structure to retirement if it lets them.

The next generation will not. They see it clearly, play it as long as it pays, and leave the moment it doesn't. They are not loyal to the org chart. They are loyal to the work. The reckoning is coming from a generation that wields honesty the way the old guard wielded politics. They are leaving. Quietly. Steadily. And the organizations they leave behind are discovering that the middle was not load-bearing after all.

This book is my reckoning. And the organization's.

---

This is changing.

Generative AI is a forcing function, but it is not the only one. The next generation leads from honesty. There is no place for layers of leadership without value. AI is a tool of the coming compression. So is the refusal to pretend the layers ever mattered.

Here is how I came to see it.

I studied finance in college. Dropped out. Watched older friends graduate with the same degree, land the jobs they were supposed to want, and loathe every hour of them while earning less than I was making in sales. No reason to pay tuition to earn less. So I sold. Inbound, outbound, the kind of selling where you learn one thing fast: you either created value for the person across the table or you wasted their time. A decade of that will calibrate you.

In 2010, I enrolled in community college and started studying computer science while working during the day. The startup boom was still gathering. Most people thought I was making a lateral move. I pivoted because software was the highest-leverage tool I had ever found for creating real value. The kind where a user has a problem on Monday and doesn't have it on Friday because you built the thing that solved it.

Two semesters in, a friend and I pitched TechStars on a semantic layer for websites. Metadata that let information find you instead of you searching for it. Push instead of pull. They loved the idea. Too early. Too costly. No clear path to a broad user base. In hindsight, they were right. But the instinct was locked in: find the problem, build the thing, put it in front of someone, watch what happens.

That instinct never left. I fed it deliberately. I chose organizations for freedom. Grand pivots. New platforms from nothing. The teams I built worked on grand ideas and thrived on the pressure of building something that communicated its own value. Not through a promotion packet. Through what it did and how it worked.

That left me with a lens: did this create value, or is this overhead that learned to justify itself?

Most organizations prefer not to answer that question. They answer with proxies. Headcount growth. Story points. Velocity. PRs merged. These are measures of activity, not value. The organizational structure exists to convert activity into the appearance of value, because the appearance of value is what gets funded, and what gets funded is what survives.

I built my career on it too. I scaled an engineering org from a handful of people to a department where the consequences of failure were external and immediate. Single-digit attrition for nearly a decade. Engineers mentored to senior, staff, and lead. I built the ladders, ran the calibrations, defended the headcount. I worked for people I respected inside organizations that gave me real problems and real freedom. By every conventional measure, I was successful. Inside the system. The system is what's breaking.

Then I left and built four products from zero. Smallest teams possible. AI-driven workflows, no layers, no coordination overhead, no meetings about meetings. I shipped faster, at higher quality, and learned more in nine months than in any comparable period of my career. That is not an anecdote. That is a data point in a pattern repeating everywhere right now.

---

The compression is here.

It is happening at the micro scale. The team that ships fine with six instead of eight. The manager role that disappears through attrition and nobody notices. The macro scale pretends nothing has changed. The org chart hasn't moved. It should have.

We built elastic infrastructure. Auto-scaling compute. Databases that flex with demand. Entire cloud platforms on the principle that fixed capacity is waste. Then we staffed the organizations that build those platforms with fixed hierarchies, fixed headcounts, and a career ladder so rigid that the only measure of progress is a title that maps to a comp band that maps to a calibration meeting that maps to a negotiation the engineer will never see.

We made the machines elastic and the humans brittle. We scaled everything except ourselves.

Why? Politicians don't vote to abolish politicians. The career ladder persists not because it develops people but because it is the mechanism through which the organization sees itself. The structure is self-preserving. It will be compressed from outside, by economics, by AI, by the startups that prove it was never necessary. Or it will not be reformed at all.

This book argues for the compression. Not downsizing. *Resizing*. The organizational equivalent of elastic infrastructure. An org that composes and decomposes around problems. That measures contribution through systems. Deployment frequency. SLO adherence. Error budgets. User adoption. The work speaks for itself when you build the systems to listen.

That replaces the career ladder with visible, system-measured impact.

That replaces the team hierarchy with fire teams of two pairs. Expert Scalers and Slop Cannons. Deep-system thinkers and high-velocity builders. Operating within streams of subject-matter expertise: security, networking, user experience, payment rails, machine learning. Not teams with managers. Currents with practitioners.

Think of each pair as a container. Two processes: one Slop Cannon, one Expert Scaler. The container is elastic. Deployed to finance one week, sales the next. Composed with other containers for a large problem. Distributed for discovery across verticals. Handed an MVP and given a week. Latent capacity is never wasted because the pairs are never permanently assigned. They flow to the highest-value problem. Loosely coupled. High impact. Stateless in their organizational attachment. Deeply stateful in their expertise.

Synchronization is lean. A small leadership team, leveraging AI, keeps a finger on the pulse across boundaries. Not managers. Orchestrators. The person who understands the work talks to the person who funds the work. Everything between them is overhead.

It replaces the interview gauntlet with something that predicts whether a person can build. The days of ceremonial, esoteric knowledge are ending. The cost of knowledge is approaching zero. What cannot be automated is the ability to look at a system and know what doesn't need to be built at all. Systems design over vertical trivia. Latticed skill over narrow expertise. The person you want on your fire team, you will know them not by how quickly they implement code but by how quickly they identify the code that doesn't need to be written.

This is the age of the generalist who goes deep on purpose. The builder who understands the technology landscape at an intuitive level because they have operated in enough of it to see the shape.

When I first got into software engineering, there was a term for the rare person who composed both sides of this coin. You would come to them with an idea on a Friday, and by Monday they would have an end-to-end working prototype. They were called 10x engineers. Unicorns. The industry treated them as anomalies. But what they were was a preview. They earned their place at the top of every hierarchy by delivering exactly what the future organization must deliver: creative, high-value output at a velocity the old structure could not process. The Expert Scaler and the Slop Cannon are the 10x engineer split into two complementary halves. The fire team is the structure that composes that output without waiting for a unicorn to walk through the door.

This book is for every person who has sat in a meeting like the one that opened this preface and thought: *there has to be something better than this.*

There is. It is smaller, faster, more honest. It is being built right now by people who got tired of waiting.

Every chapter is two acts. The first is a story. The second is a treatise. The characters are inspired by real life. We protect the innocent and the guilty.

Let's move.
