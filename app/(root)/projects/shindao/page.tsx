"use client";

import React from "react";
import {
  HeroSection,
  PresaleBanner,
  RewardTiers,
  BenefitSection,
  HypothesisSection,
  RoadmapSection,
  MountainSection,
} from "@/components/shindao";

export default function ShindaoPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection />
      <PresaleBanner />
      <RewardTiers />
      <BenefitSection />
      <HypothesisSection />
      <RoadmapSection />
      <MountainSection />
    </main>
  );
}
