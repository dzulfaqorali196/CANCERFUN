import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionVesting() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Vesting Program</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          The vesting program is designed to ensure long-term commitment to
          CancerFun’s mission. By releasing tokens gradually over time, it
          incentivizes sustained engagement, responsible stewardship, and
          alignment between contributors and the success of the research
          ecosystem.
        </p>
        <p className="mt-4">
          Detailed specifications and documentation for these Solana-native
          programs will be added to the Docs soon. If you&apos;re a developer or
          researcher interested in early access, join us on Discord to get
          involved.
        </p>
      </CardContent>
    </Card>
  );
}
