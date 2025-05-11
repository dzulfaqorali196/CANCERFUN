import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm">
        <CardContent className="pt-6 prose prose-invert max-w-none">
          <div className="text-muted-foreground">
            <h2>1. Introduction</h2>
            <p>
              Web3Project (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates a decentralized platform that leverages blockchain
              technology to provide innovative services. This Privacy Policy
              outlines our practices regarding the collection, use, and
              protection of your personal information. By using our platform,
              you consent to the practices described in this policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information</strong>: Information you provide,
                such as your name, email address, or wallet address, when
                registering an account or contacting us.
              </li>
              <li>
                <strong>Usage Data</strong>: Information about how you interact
                with our platform, including IP address, browser type, pages
                visited, and timestamps.
              </li>
              <li>
                <strong>Blockchain Data</strong>: Publicly available information
                from blockchain transactions, such as wallet addresses and
                transaction details, which may be linked to your account.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies</strong>: Data
                collected via cookies and similar technologies, as described in
                our <a href="/cookie-policy">Cookie Policy</a>.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>
                <strong>Service Delivery</strong>: To provide and maintain our
                platform, including account management and transaction
                processing.
              </li>
              <li>
                <strong>Personalization</strong>: To customize your experience,
                such as tailoring content or settings.
              </li>
              <li>
                <strong>Analytics</strong>: To analyze usage patterns and
                improve our platform’s performance and functionality.
              </li>
              <li>
                <strong>Communication</strong>: To send you updates,
                newsletters, or responses to your inquiries.
              </li>
              <li>
                <strong>Security</strong>: To protect against fraud,
                unauthorized access, and other security risks.
              </li>
              <li>
                <strong>Legal Compliance</strong>: To comply with applicable
                laws, regulations, or legal processes.
              </li>
            </ul>

            <h2>4. Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>
                <strong>Service Providers</strong>: With third-party vendors who
                perform services on our behalf, such as analytics or hosting
                providers, under strict confidentiality agreements.
              </li>
              <li>
                <strong>Blockchain Networks</strong>: Certain data, such as
                wallet addresses and transactions, is inherently public on
                blockchain networks and not controlled by us.
              </li>
              <li>
                <strong>Legal Obligations</strong>: When required by law, court
                order, or government authority.
              </li>
              <li>
                <strong>Business Transfers</strong>: In connection with a
                merger, acquisition, or sale of assets, with notice to you.
              </li>
            </ul>
            <p>
              We do not sell your personal information to third parties for
              marketing purposes.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Access</strong>: Request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction</strong>: Request corrections to inaccurate
                or incomplete information.
              </li>
              <li>
                <strong>Deletion</strong>: Request deletion of your personal
                information, subject to legal obligations.
              </li>
              <li>
                <strong>Objection</strong>: Object to certain processing
                activities, such as targeted advertising.
              </li>
              <li>
                <strong>Data Portability</strong>: Request a transferable copy
                of your data in a structured format.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at the details provided in
              Section 9. Note that blockchain data is immutable and cannot be
              deleted or modified once recorded.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard security measures, such as
              encryption and secure servers, to protect your personal
              information. However, no system is completely secure, and we
              cannot guarantee absolute security, especially for public
              blockchain data.
            </p>

            <h2>7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own, including the United States. We ensure that
              such transfers comply with applicable data protection laws, using
              mechanisms like Standard Contractual Clauses where necessary.
            </p>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our
              practices or legal requirements. We will notify you of significant
              changes by posting the updated policy on this page. Your continued
              use of the platform after such changes constitutes your acceptance
              of the revised policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
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
