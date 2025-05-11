import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm">
        <CardContent className="pt-6 prose prose-invert max-w-none">
          <div className="text-muted-foreground">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember your preferences, enhance
              functionality, and analyze usage patterns. Web3Project uses
              cookies and similar technologies (e.g., local storage, pixels) to
              improve your experience on our platform.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            <ul>
              <li>
                <strong>Essential Cookies</strong>: Necessary for the platform
                to function, such as maintaining user sessions and enabling core
                features. These cannot be disabled.
              </li>
              <li>
                <strong>Performance Cookies</strong>: Collect anonymized data
                about how users interact with our platform, helping us improve
                performance and usability.
              </li>
              <li>
                <strong>Functional Cookies</strong>: Enable enhanced features,
                such as remembering your preferences or wallet settings.
              </li>
              <li>
                <strong>Analytics Cookies</strong>: Track usage patterns to
                understand user behavior and optimize our services.
              </li>
            </ul>

            <h2>3. Purposes of Cookies</h2>
            <p>Our cookies serve the following purposes:</p>
            <ul>
              <li>
                <strong>Authentication</strong>: To verify your identity and
                maintain secure sessions.
              </li>
              <li>
                <strong>Personalization</strong>: To tailor content and settings
                based on your preferences.
              </li>
              <li>
                <strong>Analytics</strong>: To analyze platform performance and
                user engagement.
              </li>
              <li>
                <strong>Security</strong>: To protect against unauthorized
                access and ensure platform integrity.
              </li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use third-party services (e.g., analytics providers,
              blockchain explorers) that set their own cookies. These cookies
              are subject to the respective third parties’ privacy policies. We
              do not control these cookies but ensure our partners comply with
              applicable data protection regulations.
            </p>

            <h2>5. Managing Cookies</h2>
            <p>
              You can manage cookies through your browser settings to accept,
              reject, or delete them. Note that disabling cookies may affect the
              functionality of our platform, particularly essential cookies
              required for core features. For more information on managing
              cookies, visit your browser’s help section.
            </p>

            <h2>6. Consent</h2>
            <p>
              By using our platform, you consent to our use of cookies as
              described in this policy. We display a cookie consent notice upon
              your first visit, allowing you to accept or customize your cookie
              preferences (except for essential cookies, which are always
              active).
            </p>

            <h2>7. Data Protection</h2>
            <p>
              We are committed to protecting your privacy. Cookies that collect
              personal data are processed in accordance with our Privacy Policy
              and applicable regulations, such as GDPR and CCPA, where relevant.
              For details, please review our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in our
              practices or legal requirements. We will notify you of significant
              changes by posting the updated policy on this page. Your continued
              use of the platform after such changes constitutes your acceptance
              of the revised policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy or how we use
              cookies, please contact us at:
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
