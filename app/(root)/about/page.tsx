import { MissionSection } from "@/components/mission-section";
import { ValuesSection } from "@/components/values-section";
import SectionHeader from "@/components/section-header";
import { CommitteeSection } from "@/components/committee/section";

export const metadata = {
  title: "About Us | Web3Project",
  description:
    "Learn more about Web3Project, our mission, team, and vision for the future of decentralized technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="About"
          title2="CancerCoin"
          description="Empowering a global community to fund innovative cancer research through decentralized science."
        />
        <MissionSection />
        <CommitteeSection />
        <ValuesSection />
      </div>
    </div>
  );
}
