import TermsOfService from "@/components/legal/terms-of-service";
import SectionHeader from "@/components/section-header";

import "@/styles/blog.css";

export const metadata = {
  title: "Terms of Service | Web3Project",
  description:
    "Review the Terms of Service for using Web3Project's platform and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Terms of"
          title2="Service"
          description="Please read these Terms of Service carefully before using our
            platform. By accessing or using Web3Project, you agree to be bound
            by these terms."
        />
        <TermsOfService />
      </div>
    </div>
  );
}
