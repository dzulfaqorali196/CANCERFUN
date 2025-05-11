"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export function ApplicationStartButton() {
  // const router = useRouter();

  return (
    <Link href="/committee/application/page1">
      <Button
      // onClick={() => router.push("/committee/application/page1")}
      >
        Apply Now
      </Button>
    </Link>
  );
}
