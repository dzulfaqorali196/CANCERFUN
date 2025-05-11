"use client";

// import ApplicationHeaderMenu from "@/app/(root)/committee/application/page/overview-menu";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

// type FormPage = {
//   slug: string;
//   title: string;
//   status: "complete" | "incomplete";
// };

// export const formPages: FormPage[] = [
//   {
//     slug: "1",
//     title: "Personal Information",
//     status: "complete",
//   },
//   {
//     slug: "2",
//     title: "Background & Expertise",
//     status: "incomplete",
//   },
//   {
//     slug: "3",
//     title: "Motivation & Alignment",
//     status: "incomplete",
//   },
//   {
//     slug: "4",
//     title: "Involvement & Availability",
//     status: "incomplete",
//   },
//   {
//     slug: "5",
//     title: "Optional",
//     status: "incomplete",
//   },
// ];

export default function ProjectProposal() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Thank"
          title2="You"
          description="Thank you for taking the time to submit your application. We truly
            appreciate your effort and interest, and we will review your
            submission carefully. Please stay tuned for further updates!"
        />

        <div className="w-full space-y-4 text-center max-w-3xl mx-auto flex flex-col items-center">
          <Link href="/">
            <Button className="flex flex-row gap-2">
              <FaArrowLeftLong /> Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
