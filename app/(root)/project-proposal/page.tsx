import FollowUs from "@/components/contact/followus";
import SectionHeader from "@/components/section-header";
import { SiteSettings } from "@/constants/settings";

export default function ProjectProposal() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="CancerFun Committee"
          title2="Application Form"
          description="CancerFun is building a new funding and coordination layer for
                cancer research. We're looking for passionate scientists,
                researchers, clinicians, and builders who want to help us shape
                the future of decentralized biotech."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Overview
              </h3>
              <p>
                This form is for those interested in becoming part of the
                CancerFun Committee a group of experts who will help evaluate
                research proposals, advise on scientific and strategic
                direction, and represent the ethos of open, permissionless
                science.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a
                  href={`mailto:${SiteSettings.contact.email}`}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {SiteSettings.contact.email}
                </a>
              </p>
              <p className="text-gray-300">
                Phone:{" "}
                <a
                  href={`tel:${SiteSettings.contact.phone}`}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {SiteSettings.contact.phone}
                </a>
              </p>
            </div>
            <FollowUs />
          </div>

          <div className="order-1 lg:order-2">
            <div className="p-6 md:p-8 border border-web3-gray rounded-xl bg-web3-darker/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
