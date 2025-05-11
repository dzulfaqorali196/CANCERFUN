import {
  TbRibbonHealth,
  TbNetwork,
  TbLock,
  TbChartAreaLine,
  TbUsers,
  TbDatabase,
} from "react-icons/tb";

export interface IProject {
  icon: React.ElementType;
  title: string;
  url: string;
  slug: string;
  description: string;
  status: IProjectStatus;
}

export enum IProjectStatus {
  ACTIVE = "Active",
  PROPOSED = "Proposed",
  WFP = "Waiting for Proposal",
}

export const projects: IProject[] = [
  {
    icon: TbRibbonHealth,
    title: "SHINDAO",
    url: "/projects/shindao",
    slug: "shindao",
    status: IProjectStatus.ACTIVE,
    description:
      "Redefine research with autonomous hypothesis generation and data synthesis.",
  },
  {
    icon: TbNetwork,
    title: "ChainSync",
    url: "/projects/chainsync",
    slug: "chainsync",
    status: IProjectStatus.WFP,
    description:
      "A decentralized protocol for real-time cross-chain data interoperability and transaction syncing.",
  },
  {
    icon: TbLock,
    title: "PrivacyVault",
    url: "/projects/privacyvault",
    slug: "privacyvault",
    status: IProjectStatus.WFP,
    description:
      "A zero-knowledge proof system for secure, private data sharing in Web3 ecosystems.",
  },
  {
    icon: TbChartAreaLine,
    title: "Submit Your Proposal",
    url: "/projects/proposal",
    slug: "proposal-1",
    status: IProjectStatus.WFP,
    description: "Please submit your project research proposal.",
  },
  {
    icon: TbUsers,
    title: "Submit Your Proposal",
    url: "/projects/proposal",
    slug: "proposal-2",
    status: IProjectStatus.WFP,
    description: "Please submit your project research proposal.",
  },
  {
    icon: TbDatabase,
    title: "Submit Your Proposal",
    url: "/projects/proposal",
    slug: "proposal-3",
    status: IProjectStatus.WFP,
    description: "Please submit your project research proposal.",
  },
];
