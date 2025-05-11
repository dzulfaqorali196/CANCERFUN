import { Routes } from "@/constants/routes";
import Link from "next/link";

export default function FormFooter() {
  return (
    <p className="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <Link
        className="underline underline-offset-4 hover:text-primary"
        href={Routes.TERMS_OF_SERVICE}
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <a
        className="underline underline-offset-4 hover:text-primary"
        href={Routes.PRIVACY_POLICY}
      >
        Privacy Policy
      </a>
      .
    </p>
  );
}
