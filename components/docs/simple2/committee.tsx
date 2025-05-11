import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionCommittee() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Committee Member</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          The CancerFun Committee is a small group of trusted advisors,
          scientists, and ecosystem stewards who help shape the future of
          decentralized cancer research funding. As CancerFun grows, committee
          members play a key role in reviewing research proposals, guiding
          governance decisions, and ensuring alignment with our mission to
          accelerate impactful cancer innovation.
        </p>
        <h3 className="mt-6 text-lg font-semibold">
          What Do Committee Members Do?
        </h3>
        <p>
          Committee members evaluate incoming research applications, advise on
          scientific merit and feasibility, and help select which projects move
          forward. They also participate in governance discussions—helping shape
          funding criteria, protocol upgrades, and community engagement
          strategies. Beyond decision-making, members may act as public-facing
          representatives of CancerFun and provide feedback on tooling, product
          design, and ecosystem growth.
        </p>
        <h3 className="mt-6 text-lg font-semibold">Who Should Join?</h3>
        <p>
          We welcome cancer researchers, clinicians, DAO-native builders,
          biotech operators, and anyone passionate about reshaping how science
          is funded and governed. You don’t need to be crypto-native what
          matters is your expertise, curiosity, and willingness to collaborate.
        </p>
        <h3 className="mt-6 text-lg font-semibold">How It Works</h3>
        <p>
          Most communication is asynchronous and happens via Discord or
          governance platforms. The time commitment is flexible, typically 5–10
          hours per month. Committee participation is voluntary but may include
          governance privileges and optional token-based compensation in future
          phases.
        </p>
        <p className="mt-4">
          Ready to help shape the future of cancer research? Apply to be a
          CancerFun Committee Member.
        </p>
      </CardContent>
    </Card>
  );
}
