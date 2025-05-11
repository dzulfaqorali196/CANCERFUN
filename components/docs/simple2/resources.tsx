import Logo from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionResources() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">Media Kit</h3>
        <p className="mt-6">
          <Logo />
        </p>
        <h3 className="mt-6 text-lg font-semibold">Audits</h3>
        <h4 className="mt-4 font-medium">V0.1 Audit</h4>
        <p>
          Creation Swap Auction Contracts (SVM): Genesis Swap FairAuctionVesting
          Contract (Pashov Audit Group)
        </p>
      </CardContent>
    </Card>
  );
}
