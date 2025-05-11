import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as SiIcons from "react-icons/si";

export function ValuesSection() {
  const values = [
    {
      title: "Transparency",
      description:
        "Every BIO token transaction is tracked on Solana’s public blockchain, ensuring trust and accountability. Our upcoming transparency dashboard (Q3 2026) will let you see the impact of every funded project in real-time.",
      icon: "SiInternetcomputer",
    },
    {
      title: "Community Empowerment",
      description:
        "We empower our global community to shape cancer research through BIO token voting and DAO governance. From patients to developers, everyone has a voice in funding and prioritizing life-saving projects.",
      icon: "SiHiveBlockchain",
    },
    {
      title: "Innovation",
      description:
        "CancerCoin fuels cutting-edge research in immunotherapy, AI diagnostics, and more, bypassing traditional barriers. By rewarding contributors and leveraging Solana’s speed, we accelerate scientific breakthroughs worldwide.",
      icon: "SiStarship",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((value) => {
          const Icon = SiIcons[value.icon as keyof typeof SiIcons];
          return (
            <Card
              key={value.title}
              className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
