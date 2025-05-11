"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// FAQ data organized by categories
const faqData = {
  general: [
    {
      question: "What is Web3Project?",
      answer:
        "Web3Project is a next-generation decentralized platform that connects users to the blockchain ecosystem through an intuitive interface. We provide tools for trading, staking, and managing digital assets across multiple blockchain networks.",
    },
    {
      question: "How do I get started with Web3Project?",
      answer:
        "Getting started is simple. First, connect your Web3 wallet (like MetaMask or WalletConnect), then deposit your assets to start trading or earning rewards. Our platform guides you through each step with clear instructions.",
    },
    {
      question: "Is Web3Project available worldwide?",
      answer:
        "Yes, Web3Project is available globally. However, certain features may be restricted in some jurisdictions due to local regulations. We recommend checking your local laws regarding cryptocurrency and digital assets before using our platform.",
    },
  ],
  platform: [
    {
      question: "Which blockchains are supported?",
      answer:
        "We currently support Ethereum, Binance Smart Chain, Polygon, Avalanche, Solana, and several other major networks. We're continuously adding support for more chains based on community demand and technical feasibility.",
    },
    {
      question: "What are the fees for using the platform?",
      answer:
        "Our platform charges a small fee on transactions, typically ranging from 0.1% to 0.3% depending on the type of transaction. Holding our native token can reduce these fees by up to 50%. There are no hidden fees or subscription costs.",
    },
    {
      question: "Is Web3Project secure?",
      answer:
        "Security is our top priority. We employ military-grade encryption, regular security audits by leading firms, multi-signature technology, and cold storage for funds. Our smart contracts have been audited by Certik and other reputable security firms.",
    },
    {
      question: "Can I use Web3Project on mobile devices?",
      answer:
        "Yes, Web3Project is fully responsive and works on mobile browsers. Additionally, we have native mobile apps for iOS and Android that provide an optimized experience for mobile users with all the features of the web platform.",
    },
  ],
  token: [
    {
      question: "What is the utility of the W3P token?",
      answer:
        "The W3P token serves multiple purposes within our ecosystem: governance voting rights, fee discounts on all platform transactions, staking rewards and yield farming opportunities, and access to premium features and early product releases.",
    },
    {
      question: "When will the token be listed on major exchanges?",
      answer:
        "Our token is already listed on several decentralized exchanges. We're in discussions with major centralized exchanges and expect to announce new listings in the coming months. Follow our official channels for the latest updates.",
    },
    {
      question: "How can I participate in governance?",
      answer:
        "Token holders can participate in governance by voting on proposals through our DAO interface. Proposals can range from protocol upgrades to treasury allocations. Each token represents one vote, giving our community direct influence over the project's future.",
    },
    {
      question: "What is the token vesting schedule?",
      answer:
        "Team and advisor tokens are subject to a 3-year vesting schedule with a 1-year cliff. Ecosystem and treasury tokens are released gradually according to community-approved proposals. Public sale tokens are fully unlocked upon distribution.",
    },
  ],
  technical: [
    {
      question: "How does Web3Project achieve cross-chain interoperability?",
      answer:
        "We use a combination of blockchain bridges, atomic swaps, and our proprietary cross-chain communication protocol to enable seamless asset transfers and interactions between different blockchain networks without compromising security.",
    },
    {
      question: "What measures are in place to prevent impermanent loss?",
      answer:
        "Our platform implements several strategies to mitigate impermanent loss, including concentrated liquidity positions, dynamic fee tiers, and optional impermanent loss insurance for liquidity providers through a portion of protocol fees.",
    },
    {
      question: "How does the platform handle network congestion?",
      answer:
        "We implement a multi-layered approach to handle network congestion, including transaction batching, gas optimization algorithms, and the ability to route transactions through layer 2 solutions when available. This ensures reliable performance even during high network load.",
    },
    {
      question: "Is the platform code open source?",
      answer:
        "Yes, most of our platform's code is open source and available on GitHub. We believe in transparency and community collaboration. However, certain security-critical components remain proprietary to protect user assets and prevent exploitation.",
    },
  ],
};

export function FaqContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter FAQs based on search query
  const filterFaqs = (faqs: { question: string; answer: string }[]) => {
    if (!searchQuery) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get all FAQs for the "All" tab
  const allFaqs = Object.values(faqData).flat();

  // Get FAQs for the current tab and filter by search
  const getFaqsForTab = () => {
    if (activeTab === "all") return filterFaqs(allFaqs);
    return filterFaqs(faqData[activeTab as keyof typeof faqData] || []);
  };

  const displayFaqs = getFaqsForTab();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Search for answers..."
          className="pl-10 bg-web3-dark border-web3-gray"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full mb-8 bg-web3-dark border border-web3-gray rounded-lg p-1 overflow-x-auto flex flex-nowrap">
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
          <TabsTrigger value="general" className="flex-1">
            General
          </TabsTrigger>
          <TabsTrigger value="platform" className="flex-1">
            Platform
          </TabsTrigger>
          <TabsTrigger value="token" className="flex-1">
            Token
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex-1">
            Technical
          </TabsTrigger>
        </TabsList>
        <div className="space-y-6">
          {displayFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {displayFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-web3-gray"
                >
                  <AccordionTrigger className="text-left hover:text-web3-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No results found for {searchQuery}
              </p>
              <p className="text-sm">
                Try a different search term or{" "}
                <a
                  href="/contact"
                  className="text-web3-primary hover:underline"
                >
                  contact us
                </a>{" "}
                for assistance.
              </p>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}
