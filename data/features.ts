import {
  SiSolana,
  SiBitcoin,
  SiHiveBlockchain,
  SiInternetcomputer,
  SiGoogleearth,
  SiStarship,
} from "react-icons/si";

interface WhyItem {
  icon: React.ElementType;
  slug: string;
  title: string;
  description: string;
}

export const whyCancerCoin: WhyItem[] = [
  {
    icon: SiBitcoin,
    title: "Fund Breakthroughs",
    slug: "fund-breakthroughs",
    description:
      "Use $CANCER to directly support innovative cancer research, from immunotherapy to precision medicine.",
  },
  {
    icon: SiHiveBlockchain,
    title: "Govern with Impact",
    slug: "govern-with-impact",
    description:
      "Vote on research projects and protocol upgrades using $CANCER to shape cancer treatment.",
  },
  {
    icon: SiSolana,
    title: "Solana-Powered Speed",
    slug: "solana-powered-speed",
    description:
      "Leverage Solana’s 65,000 TPS and $0.01 fees to fund research instantly and affordably.",
  },
  {
    icon: SiGoogleearth,
    title: "Global Research Network",
    slug: "global-research-network",
    description:
      "Join a community funding labs in 5+ countries, uniting patients and researchers worldwide.",
  },
  {
    icon: SiStarship,
    title: "Earn Rewards",
    slug: "earn-rewards",
    description:
      "Contribute to governance or research and earn $CANCER or DAO allocations.",
  },
  {
    icon: SiInternetcomputer,
    title: "Transparent Impact",
    slug: "transparent-impact",
    description:
      "Track every funded project on Solana’s public blockchain for trust and accountability.",
  },
];
