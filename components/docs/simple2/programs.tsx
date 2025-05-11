import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionPrograms() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Programs</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">Token Program</h3>
        <p>
          The CancerFunDAO token serves as a core instrument for decentralized
          decision-making and incentivizing meaningful contributions. It
          empowers participants to directly shape the direction of cancer
          research projects while being rewarded for active involvement in
          governance, funding, and discovery efforts.
        </p>
      </CardContent>
    </Card>
  );
}
