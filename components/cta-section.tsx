import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/routes";
import Link from "next/link";
import { SiRocket } from "react-icons/si";

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-web3-darker to-web3-dark"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-web3-primary/10 blur-3xl pointer-events-none"></div>
      <div className="container relative z-10">
        <SectionHeader
          title1="Ready to Join"
          title2="Our Community?"
          description="Be part of CancerCoin’s global mission to fund innovative cancer research with $CANCER on Solana’s blockchain."
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-web3-primary hover:bg-web3-primary/90 text-white"
            >
              <Link
                href={Routes.COMMITTEE_APPLICATION}
                className="flex items-center gap-2"
              >
                <SiRocket />
                <span>Join CancerCoin Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
