export interface RoadmapItem {
  quarter: string;
  title: string;
  completed: boolean;
  items: string[];
}

export const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q2 2025",
    title: "Foundation Phase",
    completed: false,
    items: [
      "Launch $CANCER token on PumpSwap",
      "Open first research proposal submissions",
      "Initiate community onboarding campaign",
      "Begin funding first pilot project (e.g., ShinDAO)",
    ],
  },
  {
    quarter: "Q4 2025",
    title: "Growth Phase",
    completed: false,
    items: [
      "Deploy Research DAO smart contracts",
      "Launch voting for funding allocations",
      "Reach 10 funded early-stage proposals",
      "Build partnerships with 3+ research groups",
    ],
  },
  {
    quarter: "Q2 2026",
    title: "Expansion Phase",
    completed: false,
    items: [
      "Scale to 5+ active BioDAOs",
      "Translate platform into 3 languages",
      "Host first CancerFun Research Summit",
      "Launch researcher socials for transparency",
    ],
  },
  {
    quarter: "Q4 2026",
    title: "Maturity Phase",
    completed: false,
    items: [
      "Reach $3M+ research funding deployed",
      "Fund first clinical-stage research project",
      "Release open-source API for integrations",
      "Publish public impact report to community",
    ],
  },
];

export function RoadmapSection() {
  return {
    title: "CancerFun's Roadmap to a Cure",
    subtitle:
      "Our journey to revolutionize cancer research through decentralized science, powered by $CANCER tokens.",
    milestones: roadmapItems,
  };
}
