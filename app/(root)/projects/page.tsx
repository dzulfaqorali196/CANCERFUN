import Projects from "@/components/project/projects";
import SectionHeader from "@/components/section-header";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Our"
          title2="Projects"
          description="Discover our active, proposed, and upcoming CancerCoin research projects driving decentralized innovation."
        />
        <Projects />
      </div>
    </div>
  );
}
