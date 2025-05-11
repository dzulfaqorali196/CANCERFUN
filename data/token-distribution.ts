export interface Distribution {
  category: string;
  percentage: number;
  tokens: number;
  description: string;
  icon: string;
  color: string;
}

export interface DistributionData {
  totalSupply: string;
  distributions: Distribution[];
  icon: string;
}

export const tokenDistributionData: DistributionData = {
  totalSupply: "1,000,000,000",
  distributions: [
    {
      category: "Public Sale",
      color: "from-web3-primary to-web3-accent",
      percentage: 30,
      tokens: 300000000,
      description:
        "Sold to the public via supported DEXs to fund initial research projects, enabling global participation in CancerCoin’s mission to support immunotherapy and AI diagnostics.",
      icon: "SiBitcoin",
    },
    {
      category: "Team & Advisors",
      color: "from-purple-500 to-purple-700",
      percentage: 20,
      tokens: 200000000,
      description:
        "Allocated to the CancerCoin team and advisors, vested over time to ensure long-term commitment to advancing decentralized cancer research and platform development.",
      icon: "SiGoogleearth",
    },
    {
      category: "Ecosystem Growth",
      color: "from-blue-500 to-blue-700",
      percentage: 25,
      tokens: 250000000,
      description:
        "Reserved for community rewards, developer grants, and hackathons to incentivize contributions, fostering innovation and engagement in CancerCoin’s DeSci ecosystem.",
      icon: "SiStarship",
    },
    {
      category: "Treasury",
      color: "from-indigo-500 to-indigo-700",
      percentage: 15,
      tokens: 150000000,
      description:
        "Held for future initiatives, governed by BIO token voting, to support platform upgrades, partnerships, and sustained research funding.",
      icon: "SiHiveBlockchain",
    },
    {
      category: "Liquidity",
      color: "from-violet-500 to-violet-700",
      percentage: 10,
      tokens: 100000000,
      description:
        "Allocated to DEX liquidity pools to ensure smooth trading of $CANCER, supporting instant, low-fee transactions on Solana’s blockchain.",
      icon: "SiSolana",
    },
  ],
  icon: "SiSolana",
};
