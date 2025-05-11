import SectionHeader from "@/components/section-header";
import CookiePolicy from "@/components/legal/cookie-policy";

import "@/styles/blog.css";

export const metadata = {
  title: "Cookie Policy | Web3Project",
  description:
    "Learn about how Web3Project uses cookies to enhance your experience on our platform.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Cookie"
          title2="Policy"
          description="This Cookie Policy explains how Web3Project uses cookies and
              similar technologies to provide, improve, and personalize your
              experience on our platform. By continuing to use our website, you
              consent to our use of cookies as described below."
        />

        <CookiePolicy />
      </div>
    </div>
  );
}
