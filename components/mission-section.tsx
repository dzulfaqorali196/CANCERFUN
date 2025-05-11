import { Card, CardContent } from "@/components/ui/card";

export function MissionSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Mission</h2>
      <div className="max-w-4xl mx-auto">
        <Card className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm">
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg">
              CancerCoin is revolutionizing cancer research by leveraging
              Solana&apos;s blockchain and $CANCER to democratize funding,
              empower community governance, and ensure transparency. We connect
              patients, researchers, and crypto enthusiasts worldwide to
              accelerate breakthroughs in immunotherapy, AI diagnostics, and
              beyond.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
