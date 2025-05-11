import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionOverview() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          CancerFun is a new financial layer for funding and developing cancer
          research-focused biotech. Our mission is to reshape how breakthroughs
          in cancer treatment are born by enabling global communities of
          patients, researchers, and crypto users to create user-owned research
          networks that fund and develop innovative cancer biotechnologies from
          day one.
        </p>
        <p className="mt-4">
          At its core, CancerFun is designed to help scientists raise funds for
          their research, create value from that research, and capture and
          distribute that value via commercial successes.
        </p>
        <p className="mt-4">
          By breaking down traditional biotech barriers and introducing a
          permissionless framework, CancerFun can accelerate life-saving cancer
          discoveries while making them more accessible to all.
        </p>
      </CardContent>
    </Card>
  );
}
