export interface CommitteeMember {
  name: string;
  role: string;
  bio: string;
  icon: string;
  profileImage: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr. Sarah Lin",
    role: "Research Director",
    bio: "Dr. Sarah Lin leads CancerCoin’s research strategy, connecting global labs to fund immunotherapy and AI diagnostics. With 15 years in oncology, she ensures our platform supports high-impact projects, driving breakthroughs in cancer care across 5+ countries.",
    icon: "SiGoogleearth",
    profileImage: "/images/team/sarah-lin.jpg",
    socials: {
      twitter: "https://twitter.com/sarahlin_cc",
      linkedin: "https://linkedin.com/in/sarahlin_cc",
    },
  },
  {
    name: "Alex Patel",
    role: "Blockchain Architect",
    bio: "Alex Patel designs CancerCoin’s Solana-based platform, leveraging 65,000 TPS for instant research funding. A DeFi veteran, he drives technical innovation to ensure transparency, scalability, and seamless integration for our global community.",
    icon: "SiSolana",
    profileImage: "/images/team/alex-patel.jpg",
    socials: {
      twitter: "https://twitter.com/alexpatel_cc",
      linkedin: "https://linkedin.com/in/alexpatel_cc",
    },
  },
  {
    name: "Maria Gonzalez",
    role: "Governance Lead",
    bio: "Maria Gonzalez oversees BIO token voting and DAO formation, empowering CancerCoin’s community governance. Her expertise in decentralized systems ensures fair, transparent decision-making, shaping the future of cancer research.",
    icon: "SiHiveBlockchain",
    profileImage: "/images/team/maria-gonzalez.jpg",
    socials: {
      twitter: "https://twitter.com/mariagonzalez_cc",
      linkedin: "https://linkedin.com/in/mariagonzalez_cc",
    },
  },
  {
    name: "Dr. James Okoye",
    role: "Funding Coordinator",
    bio: "Dr. James Okoye manages BIO token allocations for research projects in 5+ countries. A public health expert, he bridges patients and labs to maximize impact, ensuring funds reach innovative cancer research.",
    icon: "SiBitcoin",
    profileImage: "/images/team/james-okoye.jpg",
    socials: {
      twitter: "https://twitter.com/jamesokoye_cc",
      linkedin: "https://linkedin.com/in/jamesokoye_cc",
    },
  },
  {
    name: "Emma Chen",
    role: "Community Advocate",
    bio: "Emma Chen builds CancerCoin’s global community, amplifying patient voices and rewarding contributors with $CANCER. Her outreach fosters collaboration across continents, uniting people in the fight against cancer.",
    icon: "SiStarship",
    profileImage: "/images/team/emma-chen.jpg",
    socials: {
      twitter: "https://twitter.com/emmachen_cc",
      linkedin: "https://linkedin.com/in/emmachen_cc",
    },
  },
];
