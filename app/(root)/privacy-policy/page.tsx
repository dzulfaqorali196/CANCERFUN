import SectionHeader from "@/components/section-header";
import PrivacyPolicy from "@/components/legal/privacy-policy";

import "@/styles/blog.css";

export const metadata = {
  title: "Privacy Policy | Web3Project",
  description:
    "Understand how Web3Project collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Privacy"
          title2="Policy"
          description="At Web3Project, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your personal information when you use our platform."
          date="2023-09-25"
          author="Web3Project"
        />

        <PrivacyPolicy />
      </div>
    </div>
  );
}
