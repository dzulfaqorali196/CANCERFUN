import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionDevelopers() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>Developers</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">Creation Setups</h3>
        <h4 className="mt-4 font-medium">CancerFunDAO Programs</h4>
        <p>
          The CancerFunDAO on-chain programs are designed to provide secure,
          efficient, and modular functionality for core features of CancerFunDAO
          operations — including token distribution, vesting, and governance.
        </p>
        <h4 className="mt-6 font-medium">Core Principles</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Modular Design</strong>: Each program is purpose-built with
            minimal external dependencies, enabling composability, upgrades, and
            seamless integration into DAO tooling.
          </li>
          <li>
            <strong>Security-First Architecture</strong>: Strong input
            validation, authority-based controls, and access gating protect
            program integrity and user assets.
          </li>
          <li>
            <strong>Efficient Token Management</strong>: Optimized for Solana’s
            architecture with low-cost token distribution, time-based vesting
            schedules, and lightweight data structures.
          </li>
          <li>
            <strong>Permissioned Governance</strong>: Controlled access to core
            functions (e.g., treasury, allocation) while preserving mechanisms
            for decentralized participation and transparent decision-making.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
