import SimpleDoc2 from "@/components/docs/simple2";
import SectionHeader from "@/components/section-header";

export default function Docs() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Our"
          title2="Documentation"
          description="Explore guides, tutorials, and resources to build, research, and
            engage with our decentralized biotech platform."
        />
        <SimpleDoc2 />
      </div>
    </div>
  );
}
