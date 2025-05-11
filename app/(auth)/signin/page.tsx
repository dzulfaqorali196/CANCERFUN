import LoginForm from "@/components/auth/login-form";
import Logo from "@/components/logo";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
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
                <Logo className="text-3xl" />
              </Link>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  "CancerFun is a platform for cancer research and development,
                  engineered by researchers to accelerate Cancer Focused
                  Decentralized Science"
                </p>
                <footer className="text-sm">
                  <Link href="https://orcid.org/0000-0002-8749-5653" target="_blank" className="hover:text-purple-300 transition-colors">
                    Hsun Hung - Founder
                  </Link>
                </footer>
              </blockquote>
            </div>
          </div>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
