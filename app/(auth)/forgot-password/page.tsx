import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import Logo from "@/components/logo";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <section className="overflow-hidden flex h-screen flex-col items-center justify-center">
        <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <Image
              src="/images/dna-bg-green.jpg"
              alt="Auth"
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/30"></div>
            <div className="relative z-20 flex items-center">
              <Link href={Routes.HOME}>
                <Logo variant="text" className="text-3xl" />
              </Link>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  “This library has saved me countless hours of work and helped
                  me deliver stunning designs to my clients faster than ever
                  before.”
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div>
          </div>
          <ForgotPasswordForm />
        </div>
      </section>
    </>
  );
}
