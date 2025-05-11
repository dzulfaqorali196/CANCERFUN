import SectionHeader from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { tokenDistributionData } from "@/data/token-distribution";
import { tokenMetricsData } from "@/data/token-metrics";
import { tokenUtilities } from "@/data/token-utility";

export function TokenomicsSection() {
  const {
    totalSupply,
    distributions,
    // icon
  } = tokenDistributionData;
  return (
    <section id="tokenomics" className="py-20 md:py-32 bg-web3-dark">
      <div className="container">
        <SectionHeader
          title1="CancerCoin"
          title2="Token Metrics"
          description="Discover the BIO token’s structure, powering decentralized cancer research on Solana’s blockchain."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-web3-darker p-6 bg-border-spin border border-transparent animate-border">
              <CardContent className="p-0">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">
                      Token Distribution
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Total Supply: {totalSupply}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {distributions.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span>{item.category}</span>
                          <span className="font-medium">
                            {item.percentage}%
                          </span>
                        </div>
                        <Progress
                          value={item.percentage}
                          className="h-2 bg-web3-gray"
                          indicatorClassName={`bg-linear-to-r ${item.color}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-12">
                  <h3 className="text-xl font-semibold">BIO Token Utility</h3>
                  <p className="text-sm">
                    Unlock the power of $CANCER to fund, govern, and reward
                    decentralized cancer research on Solana.
                  </p>
                  <ul className="space-y-2">
                    {tokenUtilities.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="mr-3 mt-2 h-2 w-2 rounded-full bg-web3-primary"></div>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-web3-primary/5 blur-3xl rounded-full"></div>
            <div className="relative z-10 p-6 md:p-10 border border-web3-gray rounded-2xl bg-web3-darker/50 backdrop-blur-xs">
              <h3 className="text-2xl font-semibold mb-6">
                CancerCoin Token Metrics
              </h3>
              <div className="space-y-4">
                {tokenMetricsData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between pt-4 border-t border-web3-gray"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
