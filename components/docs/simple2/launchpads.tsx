import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionLaunchpads() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Creation Launchpads</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          The CancerFun Launchpad leverages advanced Solana programs to power
          secure, scalable, and innovative project launches. Designed to
          facilitate smooth fundraising rounds, token distribution, and project
          lifecycle management, these components are integral to the broader
          CancerFun protocol ecosystem.
        </p>
        <h3 className="mt-6 text-lg font-semibold">Core Principles</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Modular Architecture</strong>: Each program is purpose-built
            with clear, isolated responsibilities and minimal external
            dependencies, enabling seamless integration and future upgrades.
          </li>
          <li>
            <strong>Security-Driven Development</strong>: Rigorous input
            validation, multi-layered permissioning, and built-in safeguards
            protect both user assets and project integrity.
          </li>
          <li>
            <strong>Optimized Efficiency</strong>: Designed to take full
            advantage of Solana’s high throughput and low-cost execution, the
            CancerFun Launchpad enables fast and frictionless participation at
            scale.
          </li>
          <li>
            <strong>Decentralized Empowerment</strong>: While providing
            essential transparency and compliance controls, the system enables
            decentralized participation and fair access for all stakeholders in
            the cancer research ecosystem.
          </li>
        </ul>
        <Button variant="link" className="mt-4 text-web3-accent">
          <a href="?tab=t.nbz4rexkxsvr">Apply for Programs</a>
        </Button>
      </CardContent>
    </Card>
  );
}
