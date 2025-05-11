import dynamic from "next/dynamic";

import { HeroSection2 } from "@/components/hero-section2";
// import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { FaqSection } from "@/components/faq-section";
// import { ProjectSection } from "@/components/project/project-section";
import { Metadata } from "next";
import { getPosts } from "@/lib/md/article";
import { ArticleDoc, ArticleType } from "@/types";
import { CommitteeSection } from "@/components/committee-section";
// import { LatestBlogPostSection } from "@/components/latest-blog-post-section";
import { FC } from "react";
import { StatsSection } from "@/components/stats-section";
import { VideoSection } from "@/components/video/video-section";
import { SiteSettings } from "@/constants/settings";
import { ResearchersMapSection } from "@/components/researchers-map-section";
import DonateSection from "@/components/donate-section";

const DynamicProjectSection = dynamic(
  () =>
    import("@/components/project/project-section").then(
      (mod) => mod.ProjectSection as FC
    ),
  {
    loading: () => <p className="text-white">Loading Project Section...</p>,
  }
);

const DynamicLatestBlogPostSection = dynamic(
  () =>
    import("@/components/latest-blog-post-section").then(
      (mod) => mod.LatestBlogPostSection as FC<{ posts: ArticleDoc[] }>
    ),
  {
    loading: () => (
      <p className="text-white">Loading Latest Blog Post Section...</p>
    ),
  }
);

export const metadata: Metadata = {
  title: "CancerFun",
  description: SiteSettings.description,
  keywords: [
    "CancerFun",
    "decentralized cancer research",
    "Solana biotech funding",
    "BIO token",
    "Web3",
    "cancer research funding",
  ],
  metadataBase: new URL("https://cancerfun.fun"),
  openGraph: {
    title: "CancerFun",
    description: SiteSettings.description,
    url: "https://cancerfun.fun",
    siteName: "CancerFun",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CancerFun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CancerFun",
    description: SiteSettings.description,
    images: ["/images/og-image.png"],
    site: "@cancerfun",
  },
};

export default async function Home() {
  // const articles = await getPosts(ArticleType.WHY);
  const posts = await getPosts(ArticleType.BLOG);
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSection2 />
      {/* <FeaturesSection articles={articles} /> */}
      <StatsSection />
      <DynamicProjectSection />
      <VideoSection />
      <ResearchersMapSection />
      {/* <RoadmapSection /> */}
      <HowItWorksSection />
      {/* <TokenomicsSection /> */}
      <FaqSection />
      <CommitteeSection />
      <DonateSection />
      <DynamicLatestBlogPostSection posts={posts} />
      {/* <CtaSection /> */}
    </>
  );
}
