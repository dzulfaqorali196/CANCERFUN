import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section id="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              CancerFun is a new financial layer for funding and developing
              cancer research-focused biotech. Our mission is to reshape how
              breakthroughs in cancer treatment are born by enabling global
              communities of patients, researchers, and crypto users to create
              user-owned research networks that fund and develop innovative
              cancer biotechnologies from day one.
            </p>
            <p className="mt-4 text-gray-200">
              At its core, CancerFun is designed to help scientists raise funds
              for their research, create value from that research, and capture
              and distribute that value via commercial successes.
            </p>
            <p className="mt-4 text-gray-200">
              By breaking down traditional biotech barriers and introducing a
              permissionless framework, CancerFun can accelerate life-saving
              cancer discoveries while making them more accessible to all.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="terms">
        <Card>
          <CardHeader>
            <CardTitle>Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">
              CancerFun Creation: Terms & Conditions
            </h3>
            <p className="mt-4 text-gray-200">
              Welcome to the CancerFun Creation Terms (these “Research Creation
              Terms”) for the CancerFun token Creation (the “Creation”) by
              CancerFun Foundation (“Organization”, “we” or “us”).
            </p>
            <p className="mt-4 text-gray-200">
              These CancerFun Creation Terms govern your ability to use our
              website in order to participate in the Creation. Please read these
              CancerFun Creation Terms carefully, as they include important
              information about your legal rights. By participating in the
              Creation or claiming CANCER tokens, you are agreeing to these
              CancerFun Creation Terms. If you do not understand or agree to
              these CancerFun Creation Terms, do not participate in the
              Creation.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Eligibility</h3>
            <p className="mt-4 text-gray-200">
              By accessing and participating in the Creation you represent and
              warrant to us that:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mt-2">
              <li>
                You are at least 18 years old, or the legal age in your
                jurisdiction, with no legal impediment or incapability, capable
                of participating in the Creation and participating in any
                resulting CANCER token distribution.
              </li>
              <li>
                You have read and understood the risks of Creation, and that you
                are solely responsible for your actions.
              </li>
              <li>
                You are acting on your own account as principal and not as
                trustee, agent or otherwise on behalf of any other persons or
                entities.
              </li>
              <li>
                You have had the opportunity to take legal, financial,
                accounting or other advice that you deem appropriate prior to
                participating in the Creation.
              </li>
              <li>
                Your access to the Creation may be restricted based on your
                jurisdiction or geographical location. You must not use the
                Creation if you are located in or a citizen or resident of any
                state, country, territory or other jurisdiction in which use of
                the Creation would be illegal or otherwise violate any
                applicable law (a &quot;Restricted Territory&quot;).
              </li>
              <li>
                We reserve the right to restrict access to any Restricted
                Territory and may implement technical controls to prevent access
                to the Creation from any Restricted Territory, including, but
                not limited to, Algeria, Bangladesh, Bolivia, Belarus, Myanmar
                (Burma), Côte d’Ivoire (Ivory Coast), Egypt, Republic of Crimea,
                Cuba, Democratic Republic of the Congo, Iran, Iraq, Liberia,
                Libya, Mali, Morocco, Nepal, North Korea, Kuwait, Oman, Qatar,
                Somalia, Sudan, Syria, Tunisia, United States, Venezuela, Yemen,
                Zimbabwe, or any jurisdictions in which the sale of
                cryptocurrencies are prohibited, restricted or unauthorized.
              </li>
              <li>
                You are not a resident of any restricted territory and have not
                used any technical means including any virtual private network
                (VPN) or other means to disguise or manipulate your geographical
                location to access the Creation from a restricted territory.
              </li>
              <li>
                You represent that your access and use of the Creation will
                fully comply with all applicable laws and regulations, and that
                you will not access or use the Creation or the CANCER tokens to
                conduct, promote, or otherwise facilitate any illegal activity.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Risks</h3>
            <p className="mt-4 text-gray-200">
              By accessing and participating in the Creation, you represent that
              you understand the financial and technical risks associated with
              using cryptographic and blockchain-based systems, including:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mt-2">
              <li>
                The markets for these digital assets are nascent and highly
                volatile due to factors including adoption, speculation,
                technology, security, and regulation.
              </li>
              <li>
                Anyone can create fake versions of tokens and falsely claim to
                represent projects. You accept the risk of mistakenly trading
                those.
              </li>
              <li>
                Smart contract transactions automatically execute and settle,
                and blockchain-based transactions are irreversible when
                confirmed.
              </li>
              <li>
                The cost and speed of transacting on Ethereum may vary
                significantly.
              </li>
              <li>
                We are not responsible for any such risks, do not own or control
                the protocol, and are not liable for losses incurred from
                accessing or participating in the Creation.
              </li>
              <li>
                You assume full responsibility for all risks associated with
                using the Creation.
              </li>
              <li>
                We do not own or control the underlying blockchain software,
                including Ethereum.
              </li>
            </ul>
            <p className="mt-4 text-gray-200">
              By using the services, you acknowledge:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mt-2">
              <li>
                We are not responsible for blockchain operations underlying the
                Creation.
              </li>
              <li>
                No guarantee exists for software or network functionality,
                security, or availability.
              </li>
              <li>
                Blockchains are subject to changes (&quot;forks&quot;) that may
                impact the Creation.
              </li>
              <li>
                You alone are responsible for securing your private keys. Loss
                of keys means permanent loss of access to your digital assets.
              </li>
              <li>
                Regulatory inquiries may impact the ability to continue
                providing our services.
              </li>
              <li>
                Information related to the Creation may not always be complete,
                current, or accurate.
              </li>
              <li>
                You are solely responsible for evaluating any code provided and
                information used.
              </li>
              <li>
                You must make your own investigations into the risks of any
                transaction.
              </li>
              <li>
                You accept the risk of losing access to your assets. We are not
                responsible for errors or trades you place.
              </li>
              <li>
                You waive all claims against us regarding the risks inherent in
                the Creation.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">
              Prohibited Activities
            </h3>
            <p className="mt-4 text-gray-200">
              You agree not to engage in or attempt any of the following while
              using the Creation:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mt-2">
              <li>
                Infringement of copyright, trademarks, or other intellectual
                property.
              </li>
              <li>Interfering with or compromising IT systems.</li>
              <li>Fraud or misrepresentation.</li>
              <li>
                Violations of trading integrity, securities laws, or regulatory
                requirements.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">
              Intellectual Property
            </h3>
            <p className="mt-4 text-gray-200">
              We own all IP rights to our services under the CancerFun Creation,
              including software, images, trademarks, and designs. You may not
              copy or use any IP without written consent. Open-source components
              must be used in accordance with their licenses. You retain control
              of your digital assets in non-custodial smart contracts.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Non-Custodial</h3>
            <p className="mt-4 text-gray-200">
              You are solely responsible for the custody of your private keys
              and wallets. We owe no fiduciary duties unless explicitly stated
              in these Terms.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Privacy</h3>
            <p className="mt-4 text-gray-200">
              We collect certain data during the Airdrop, including wallet
              addresses and transaction details. AML and KYC compliance may
              require additional personal information. We may share data with
              third-party analytics providers for security and compliance.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
              Modification of this Agreement
            </h3>
            <p className="mt-4 text-gray-200">
              We may modify, suspend, or disable the Creation at any time.
              Changes are effective upon posting. Continued use confirms your
              acceptance.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Disclaimers</h3>
            <p className="mt-4 text-gray-200">
              The Creation is provided &quot;as is&quot; without warranties. We
              are not liable for any damages from your participation in the
              Creation.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Indemnification</h3>
            <p className="mt-4 text-gray-200">
              You agree to indemnify us and our affiliates from any claims
              related to:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mt-2">
              <li>Your use of the Creation and CANCER tokens.</li>
              <li>Assets associated with your Ethereum address.</li>
              <li>User content you provide.</li>
              <li>Your violation of these Terms.</li>
              <li>Infringement of others’ rights.</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">
              Limitation of Liability
            </h3>
            <p className="mt-4 text-gray-200">
              We are not liable for any indirect, incidental, special, punitive,
              or consequential damages arising out of your use of the Creation.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Release</h3>
            <p className="mt-4 text-gray-200">
              You assume all risks and waive all claims related to your use of
              the Creation and CancerFun tokens. These Terms survive termination
              of your access.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
              Governing Law and Jurisdiction
            </h3>
            <p className="mt-4 text-gray-200">
              These Terms are governed by Swiss law. Disputes are subject to the
              exclusive jurisdiction of the courts of Zug, Switzerland.
            </p>

            <Button variant="link" className="mt-4">
              <a href="?tab=t.q2tdomiriiec">View Full Terms & Conditions</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="token">
        <Card>
          <CardHeader>
            <CardTitle>$CANCER Token</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">CancerFun on Solana</h3>
            <p className="text-gray-200">$Cancer Token Contract: xxxxxxxxxx</p>

            <h3 className="mt-6 text-lg font-semibold my-3">$CANCER Utility</h3>
            <p className="text-gray-200">
              CANCER is the native governance token of the CancerFun protocol.
              It empowers communities, researchers, and token holders to
              collaboratively fund, govern, and build the future of
              decentralized cancer research.
            </p>
            <p className="mt-4 text-gray-200">CANCER may be used to:</p>
            <ul className="list-disc pl-6 text-gray-200">
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
            <p className="mt-4 text-gray-200">
              Holders of $CANCER gain access to:
            </p>
            <ul className="list-disc pl-6 text-gray-200">
              <li>
                Governance rights in CancerFun protocol and affiliated cancer
                research DAOs
              </li>
              <li>
                Whitelists in DAO-led funding rounds for emerging cancer
                therapeutics
              </li>
              <li>
                Early allocations of CancerFun-affiliated DAO tokens and
                projects
              </li>
              <li>
                Contribution rewards for participation in protocol activities,
                including clinical research and open science initiatives
              </li>
              <li>
                Access to health innovations, tools, or data products developed
                by CancerFun DAOs
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold my-3">Cancernomics</h3>
            <p className="text-gray-200">
              CANCER is the native governance token of the CancerFun protocol.
              It was issued by CancerFun Foundation, a not-for-profit
              organization that serves as the legal steward of the CancerFun
              infrastructure and treasury.
            </p>

            <h3 className="mt-6 text-lg font-semibold my-3">
              Initial Distribution
            </h3>
            <p className="text-gray-200">
              Total Supply Capped at 1,000,000,000 CANCER Tokens: The total
              supply of CANCER tokens is capped at 1 billion to ensure scarcity
              and align with the protocol&apos;s long-term vision. This cap will
              not be exceeded, providing clarity and stability for holders.
            </p>
            <p className="mt-4 text-gray-200">
              Supply Cap: Uncapped beyond the initial allocation; future
              governance proposals may propose token contract replacements for
              future growth, but the 1 billion cap remains.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="developers">
        <Card>
          <CardHeader>
            <CardTitle>Developers</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">Creation Setups</h3>
            <h4 className="mt-4 font-medium">CancerFunDAO Programs</h4>
            <p className="text-gray-200">
              The CancerFunDAO on-chain programs are designed to provide secure,
              efficient, and modular functionality for core features of
              CancerFunDAO operations — including token distribution, vesting,
              and governance.
            </p>

            <h4 className="mt-6 font-medium">Core Principles</h4>
            <ul className="list-disc pl-6 text-gray-200">
              <li>
                <strong>Modular Design</strong>: Each program is purpose-built
                with minimal external dependencies, enabling composability,
                upgrades, and seamless integration into DAO tooling.
              </li>
              <li>
                <strong>Security-First Architecture</strong>: Strong input
                validation, authority-based controls, and access gating protect
                program integrity and user assets.
              </li>
              <li>
                <strong>Efficient Token Management</strong>: Optimized for
                Solana’s architecture with low-cost token distribution,
                time-based vesting schedules, and lightweight data structures.
              </li>
              <li>
                <strong>Permissioned Governance</strong>: Controlled access to
                core functions (e.g., treasury, allocation) while preserving
                mechanisms for decentralized participation and transparent
                decision-making.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="programs">
        <Card>
          <CardHeader>
            <CardTitle>Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold my-3">Token Program</h3>
            <p className="text-gray-200">
              The CancerFunDAO token serves as a core instrument for
              decentralized decision-making and incentivizing meaningful
              contributions. It empowers participants to directly shape the
              direction of cancer research projects while being rewarded for
              active involvement in governance, funding, and discovery efforts.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="vesting">
        <Card>
          <CardHeader>
            <CardTitle>Vesting Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              The vesting program is designed to ensure long-term commitment to
              CancerFun’s mission. By releasing tokens gradually over time, it
              incentivizes sustained engagement, responsible stewardship, and
              alignment between contributors and the success of the research
              ecosystem.
            </p>
            <p className="mt-4 text-gray-200">
              Detailed specifications and documentation for these Solana-native
              programs will be added to the Docs soon. If you&apos;re a
              developer or researcher interested in early access, join us on
              Discord to get involved.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="launchpads">
        <Card>
          <CardHeader>
            <CardTitle>Creation Launchpads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              The CancerFun Launchpad leverages advanced Solana programs to
              power secure, scalable, and innovative project launches. Designed
              to facilitate smooth fundraising rounds, token distribution, and
              project lifecycle management, these components are integral to the
              broader CancerFun protocol ecosystem.
            </p>
            <h3 className="mt-6 text-lg font-semibold my-3">Core Principles</h3>
            <ul className="list-disc pl-6 text-gray-200">
              <li>
                <strong>Modular Architecture</strong>: Each program is
                purpose-built with clear, isolated responsibilities and minimal
                external dependencies, enabling seamless integration and future
                upgrades.
              </li>
              <li>
                <strong>Security-Driven Development</strong>: Rigorous input
                validation, multi-layered permissioning, and built-in safeguards
                protect both user assets and project integrity.
              </li>
              <li>
                <strong>Optimized Efficiency</strong>: Designed to take full
                advantage of Solana’s high throughput and low-cost execution,
                the CancerFun Launchpad enables fast and frictionless
                participation at scale.
              </li>
              <li>
                <strong>Decentralized Empowerment</strong>: While providing
                essential transparency and compliance controls, the system
                enables decentralized participation and fair access for all
                stakeholders in the cancer research ecosystem.
              </li>
            </ul>
            <Button variant="link" className="mt-4">
              <a href="?tab=t.nbz4rexkxsvr">Apply for Programs</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="committee">
        <Card>
          <CardHeader>
            <CardTitle>Committee Member</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              The CancerFun Committee is a small group of trusted advisors,
              scientists, and ecosystem stewards who help shape the future of
              decentralized cancer research funding. As CancerFun grows,
              committee members play a key role in reviewing research proposals,
              guiding governance decisions, and ensuring alignment with our
              mission to accelerate impactful cancer innovation.
            </p>
            <h3 className="mt-6 text-lg font-semibold my-3">
              What Do Committee Members Do?
            </h3>
            <p className="text-gray-200">
              Committee members evaluate incoming research applications, advise
              on scientific merit and feasibility, and help select which
              projects move forward. They also participate in governance
              discussions—helping shape funding criteria, protocol upgrades, and
              community engagement strategies. Beyond decision-making, members
              may act as public-facing representatives of CancerFun and provide
              feedback on tooling, product design, and ecosystem growth.
            </p>
            <h3 className="mt-6 text-lg font-semibold my-3">
              Who Should Join?
            </h3>
            <p className="text-gray-200">
              We welcome cancer researchers, clinicians, DAO-native builders,
              biotech operators, and anyone passionate about reshaping how
              science is funded and governed. You don’t need to be crypto-native
              what matters is your expertise, curiosity, and willingness to
              collaborate.
            </p>
            <h3 className="mt-6 text-lg font-semibold my-3">How It Works</h3>
            <p className="text-gray-200">
              Most communication is asynchronous and happens via Discord or
              governance platforms. The time commitment is flexible, typically
              5–10 hours per month. Committee participation is voluntary but may
              include governance privileges and optional token-based
              compensation in future phases.
            </p>
            <p className="mt-4 text-gray-200">
              Ready to help shape the future of cancer research? Apply to be a
              CancerFun Committee Member.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="resources">
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">Media Kit</h3>
            <p className="text-gray-200">
              <Logo />
            </p>
            <h3 className="mt-6 text-lg font-semibold my-3">Audits</h3>
            <h4 className="mt-4 font-medium">V0.1 Audit</h4>
            <p className="text-gray-200">
              Creation Swap Auction Contracts (SVM): Genesis Swap
              FairAuctionVesting Contract (Pashov Audit Group)
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
