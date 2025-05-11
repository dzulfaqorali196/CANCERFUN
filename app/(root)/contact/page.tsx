import FollowUs from "@/components/contact/followus";
import { ContactForm } from "@/components/contact/form";
import SectionHeader from "@/components/section-header";

export const metadata = {
  title: "CancerFun",
  description:
    "Reach out to the CancerFun team to join our mission of funding decentralized cancer research with $CANCER on Solana's blockchain.",
  keywords: [
    "CancerFun",
    "BIO token",
    "cancer research",
    "Solana blockchain",
    "Web3",
    "decentralized funding",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Connect with"
          title2="CancerFun"
          description="Have questions about our platform? Want to join our mission to fund cancer research? We'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a
                  href="mailto:info@cancercoin.fun"
                  className="text-purple-400 hover:text-purple-300"
                >
                  info@cancercoin.fun
                </a>
              </p>
            </div>
            <FollowUs />
          </div>

          <div>
            <div className="p-6 md:p-8 border border-web3-gray rounded-xl bg-web3-darker/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
