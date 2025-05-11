import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm">
        <CardContent className="pt-6 prose prose-invert max-w-none">
          <div className="text-muted-foreground">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Web3Project platform
              (&quot;Platform&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;) and all applicable laws and
              regulations. If you do not agree with any of these Terms, you are
              prohibited from using or accessing the Platform.
            </p>

            <h2>2. Use of the Platform</h2>
            <p>
              You must be at least 18 years of age to use the Platform. You
              agree to use the Platform only for lawful purposes and in a manner
              that does not infringe the rights of, restrict, or inhibit anyone
              else&apos;s use and enjoyment of the Platform.
            </p>
            <ul>
              <li>Prohibited activities include, but are not limited to:</li>
              <li>Engaging in unauthorized access to the Platform.</li>
              <li>Distributing malware or other harmful code.</li>
              <li>Violating intellectual property rights.</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Platform, you may be required to
              create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
            </p>

            <h2>4. Blockchain and Cryptocurrency</h2>
            <p>
              The Platform may involve interactions with blockchain technology
              and cryptocurrencies. You acknowledge that such activities carry
              inherent risks, including but not limited to market volatility,
              regulatory changes, and technical vulnerabilities. Web3Project is
              not responsible for any losses incurred due to these risks.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on the Platform, including text, graphics, logos, and
              software, is the property of Web3Project or its licensors and is
              protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works without express written
              permission.
            </p>

            <h2>6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the
              Platform at our sole discretion, without notice, for conduct that
              we believe violates these Terms or is harmful to other users or
              third parties.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Web3Project shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, arising from your use of the
              Platform.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law provisions. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts located in
              Crypto Valley, CV, United States.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of
              any changes by posting the new Terms on this page. Your continued
              use of the Platform after such changes constitutes your acceptance
              of the new Terms.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: info@web3project.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Blockchain Avenue, Crypto Valley, CV 94103, United
              States
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
