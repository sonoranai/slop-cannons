export const TOPIC_META = {
  title: "Real vs Inherited Complexity",
  subtitle: "The Diagnostic Filter",
  description:
    "Four kinds of complexity worth distinguishing: essential, accidental, real, inherited. A three-question diagnostic, ordered from easiest to most structural, walked through an architecture review board as a worked example. The false-positive risk is real, and the honest argument names it.",
  slug: "real-vs-inherited-complexity",
  keywords: [
    "organizational complexity",
    "inherited complexity",
    "essential vs accidental complexity",
    "process overhead",
    "architecture review board",
    "engineering org design",
    "diagnostic procedure",
    "engineering efficiency",
  ],
};

export const TOPIC_PARAGRAPHS = [
  `Not all complexity is waste.`,

  `Saying otherwise is the mistake that makes most org-design advice break on contact with reality. Some domains are genuinely, irreducibly complex. A payments company processing across seventeen tax jurisdictions is solving a real problem. A clinical trial platform tracking adverse events through a regulatory reporting chain is solving a real problem. No amount of organizational cleverness simplifies away a complex domain.`,

  `The mistake is treating all complexity as the same kind. There are four categories worth distinguishing, and the diagnostic depends on being able to tell them apart.`,

  `Essential complexity is the complexity of the problem itself. The fact that scheduling a surgery requires coordinating an anesthesiologist, a surgeon, an OR, recovery staff, and the patient's other commitments is essential. You cannot design it away. You can only shape how the software models it. A good system matches the shape of the essential complexity. A bad system fights it and makes the experience worse for everyone.`,

  `Accidental complexity is the complexity the tools introduce. A deployment pipeline that takes an hour because of CI configuration nobody has touched in years. A dependency graph where one library update forces six others. Accidental complexity is yours to kill. Nobody pays you to carry it.`,

  `Real complexity is domain complexity at organizational scale. It is essential complexity interacting with regulatory constraints, multiple customers, multiple jurisdictions, multiple time zones, and production-grade reliability demands. Real complexity is legitimate. Managing it is the job.`,

  `Inherited complexity is none of the above. It is the process, structure, and apparatus that accumulated as rational responses to specific incidents, constraints, or political moments that may no longer exist. The team was split into three squads because headcount hit a threshold where some VP decided it needed a director, and directors need multiple teams. The approval chain for production deployments exists because someone pushed a bad config in 2019 and the postmortem recommended a review step. The step is still there. The 2019 pipeline has been replaced twice since. Nobody revisited the step.`,

  `The canonical example is the architecture review board. I have seen ARBs that have not had a member touch production code in three years. They review designs on paper, add process gates, and require documentation whose purpose is to satisfy the gate, not to communicate anything useful. The designs that survive the ARB are not better designs. They are designs that are better at passing the ARB. Those are different things. The board selects for legibility to non-practitioners, not for quality.`,

  `How do you tell inherited complexity from real?`,

  `Three questions, asked in order. Each raises the stakes.`,

  `Origin. What specific failure, requirement, or incident created this? Force a name. A date. A postmortem. A regulation. If nobody can answer, the process is already suspect. Real and essential complexity have clear origins tied to the problem or the domain. Inherited complexity often cannot be traced to anything specific, which is usually why nobody has the standing to remove it.`,

  `Counterfactual. If this did not exist tomorrow, what breaks, and for whom? Answers like "visibility" or "alignment" are disqualifying. They are narrations of purpose, not effects. Answers like "we would miss a SOX control" or "a duplicate write would corrupt ledger state" qualify. The test is whether a concrete, externally observable failure returns, or whether the only change is that some internal person has slightly less information.`,

  `Cost-of-removal. What would it cost to prove it is unnecessary? If the answer is "one sprint with a kill switch," run the experiment. If the answer is "a regulator audit in eighteen months," you have real complexity. Most inherited complexity has never been stress-tested by removal. The people maintaining it assume it is load-bearing because it has always been there, not because anyone checked.`,

  `Run it on the ARB.`,

  `Origin. The board was established in 2017, charter updated in 2019 after a specific incident in the payments service. The incident: a junior engineer chose a relational database for an append-only event log and the system collapsed under load six months later.`,

  `Counterfactual. If the ARB went dark for a month, users would notice nothing. The failure it defends against is a repeat of the 2017 incident. In the meantime, that failure class is now caught by a static-analysis gate in CI that rejects schemas tagged as append-only if backed by a non-append-optimized store. The original failure has a cheaper defense.`,

  `Cost-of-removal. Sunset the ARB for one quarter. Replace it with a pre-deployment design doc reviewed by two on-call engineers for any change touching persistence or auth. Measure: number of design flaws caught in review, post-incident correlations to missed review, engineer hours reclaimed. If the flaw rate rises meaningfully, reinstate. If it holds, the ARB was overhead. The experiment is cheap and reversible.`,

  `The answer to "keep the ARB or kill it" is no longer rhetorical. The three-question run gives it an evidence-based answer.`,

  `There is a cost to running this diagnostic. An honest argument for the method names it.`,

  `You will get false positives. Not every process that looks inherited is. The diagnostic favors removal because removal is reversible and keeping is cumulative. But occasionally a process that looks ceremonial is actually the last thin thread preventing a specific, known failure mode. Running the diagnostic aggressively on every process at once guarantees that one or two of those get through. Go slowly where the cost of a false positive is high. Regulated gates. Safety-critical paths. Data-integrity checks on production transactions. On those, the three questions should move from a thirty-minute conversation to a month-long pilot before anything changes.`,

  `You will get resistance. The people maintaining inherited complexity are usually well-intentioned. They believe the process is load-bearing. Often they are right in some abstract sense. The diagnostic forces them to put it to a specific test, and the test has a failure case. That is the point. The resistance is real and the political cost of running the diagnostic belongs in the honest argument for it.`,

  `You will create surface area for bad-faith arguments. Once "this is inherited complexity" becomes a known move, it will be invoked to defend cutting things that should not be cut. A director who wants headcount savings will gesture at the diagnostic without running it. The defense is running the diagnostic properly. If the three questions are asked and answered honestly, they hold.`,

  `The balance is that the diagnostic applies best to work you can see clearly and worst to work you cannot. If you cannot answer Origin without a call to someone who left three years ago, start somewhere else. If your Counterfactual says "I have no idea, maybe something bad," run a tighter scope first. The method is a lens, not a flamethrower.`,

  `In a compressed organization, the leverage of removing inherited complexity grows with how fast the pairs can move without it. A one-week approval delay that was barely noticeable when the team took six weeks now consumes a third of the delivery timeline. As AI collapses building cost, the cost of organizational friction becomes the dominant constraint.`,

  `Clean it up or it will define your speed.`,
];
