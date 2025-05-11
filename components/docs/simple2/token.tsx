import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SectionToken() {
  return (
    <Card className="bg-web3-darker text-web3-light border-web3-gray/50">
      <CardHeader>
        <CardTitle>$CANCER Token</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">CancerFun on Solana</h3>
        <p>$Cancer Token Contract: xxxxxxxxxx</p>
        <h3 className="mt-6 text-lg font-semibold">$CANCER Utility</h3>
        <p>
          CANCER is the native governance token of the CancerFun protocol. It
          empowers communities, researchers, and token holders to
          collaboratively fund, govern, and build the future of decentralized
          cancer research.
        </p>
        <p className="mt-4">CANCER may be used to:</p>
        <ul className="list-disc pl-6">
          <li>
            Curate Cancer-Focused Projects: Select which research groups or
            initiatives are onboarded into the CancerFun network.
          </li>
          <li>
            Provide Liquidity to CancerFun DAOs: Support early-stage cancer
            research DAOs through liquidity provisioning and staking.
          </li>
          <li>
            Vote on Protocol Upgrades: Participate in CancerFun protocol
            development, including treasury usage and funding guidelines.
          </li>
          <li>
            Run CancerFun Agents: Operate automated agents that facilitate
            coordination, research validation, and DAO tooling.
          </li>
        </ul>
        <p className="mt-4">Holders of $CANCER gain access to:</p>
        <ul className="list-disc pl-6">
          <li>
            Governance rights in CancerFun protocol and affiliated cancer
            research DAOs
          </li>
          <li>
            Whitelists in DAO-led funding rounds for emerging cancer
            therapeutics
          </li>
          <li>
            Early allocations of CancerFun-affiliated DAO tokens and projects
          </li>
          <li>
            Contribution rewards for participation in protocol activities,
            including clinical research and open science initiatives
          </li>
          <li>
            Access to health innovations, tools, or data products developed by
            CancerFun DAOs
          </li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Cancernomics</h3>
        <p>
          CANCER is the native governance token of the CancerFun protocol. It
          was issued by CancerFun Foundation, a not-for-profit organization that
          serves as the legal steward of the CancerFun infrastructure and
          treasury.
        </p>
        <h3 className="mt-6 text-lg font-semibold">Initial Distribution</h3>
        <p>
          Total Supply Capped at 1,000,000,000 CANCER Tokens: The total supply
          of CANCER tokens is capped at 1 billion to ensure scarcity and align
          with the protocol&apos;s long-term vision. This cap will not be
          exceeded, providing clarity and stability for holders.
        </p>
        <p className="mt-4">
          Supply Cap: Uncapped beyond the initial allocation; future governance
          proposals may propose token contract replacements for future growth,
          but the 1 billion cap remains.
        </p>
      </CardContent>
    </Card>
  );
}
