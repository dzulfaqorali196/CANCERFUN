import { redirect } from "next/navigation";

export default function Home() {
  redirect("/committee/application/page1");
}

/*
"use client";

import ApplicationHeaderMenu from "@/app/(root)/committee/application/page/overview-menu";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FormPage = {
  slug: string;
  title: string;
  status: "complete" | "incomplete";
};

export const formPages: FormPage[] = [
  {
    slug: "1",
    title: "Personal Information",
    status: "complete",
  },
  {
    slug: "2",
    title: "Background & Expertise",
    status: "incomplete",
  },
  {
    slug: "3",
    title: "Motivation & Alignment",
    status: "incomplete",
  },
  {
    slug: "4",
    title: "Involvement & Availability",
    status: "incomplete",
  },
  {
    slug: "5",
    title: "Optional",
    status: "incomplete",
  },
];

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
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-6">
          <div className="w-full md:w-1/2 space-y-4">
            <p>
              Thank you for your interest in joining the CancerFun Committee.
              This application form consists of 5 pages. You may pause and
              resume at any time.
            </p>
            <p>
              This form is for those interested in becoming part of the
              CancerFun Committee, a group of experts who will help evaluate
              research proposals, advise on scientific and strategic direction,
              and represent the ethos of open, permissionless science.
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold">Form Overview</h3>
              <ApplicationHeaderMenu
                menuItems={formPages}
                className="flex-col"
              />
            </div>
            <Button>
              <Link href="/committee/application/page/2">
                Continue Application
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
