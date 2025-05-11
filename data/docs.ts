import { FileText, Rocket, Code, FolderOpen } from "lucide-react";

export interface DocTopic {
  title: string;
  category: string;
  description: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  subtopics: {
    name: string;
    url: string;
  }[];
}

export const docTopics: DocTopic[] = [
  {
    title: "Introduction",
    category: "introduction",
    description:
      "Understand the fundamentals of BioDAO and its ecosystem for decentralized biotech research.",
    icon: FileText,
    status: "Available",
    subtopics: [
      { name: "Overview", url: "/docs/introduction/overview" },
      { name: "Concepts", url: "/docs/introduction/concepts" },
      { name: "Bio Protocol V1", url: "/docs/introduction/bio-protocol-v1" },
      { name: "BIO Token", url: "/docs/introduction/bio-token" },
    ],
  },
  {
    title: "Quick Start Guides",
    category: "quick-start",
    description:
      "Get started with BioDAO by joining launches, creating DAOs, or running BioAgents.",
    icon: Rocket,
    status: "Available",
    subtopics: [
      {
        name: "Join BioDAO Launches",
        url: "/docs/quick-start/join-biodao-launches",
      },
      { name: "Start a BioDAO", url: "/docs/quick-start/start-biodao" },
      { name: "Run BioAgents", url: "/docs/quick-start/run-bioagents" },
    ],
  },
  {
    title: "Developers",
    category: "developers",
    description:
      "Technical guides and APIs for building and integrating with BioDAO's decentralized platform.",
    icon: Code,
    status: "Available",
    subtopics: [
      { name: "DAO Setup", url: "/docs/developers/dao-setup" },
      { name: "Launchpad", url: "/docs/developers/launchpad" },
      { name: "Utils", url: "/docs/developers/utils" },
      { name: "Audits", url: "/docs/developers/audits" },
    ],
  },
  {
    title: "Resources",
    category: "resources",
    description:
      "Additional materials and legal documents to support your BioDAO journey.",
    icon: FolderOpen,
    status: "Available",
    subtopics: [
      { name: "Media Kit", url: "/docs/resources/media-kit" },
      { name: "Terms & Conditions", url: "/docs/resources/terms-conditions" },
      { name: "Audits", url: "/docs/resources/audits" },
    ],
  },
];
