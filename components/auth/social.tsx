"use client";

import { signIn } from "next-auth/react";
import { Routes } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import { authSocials } from "@/constants/auth-social";
import { authConfig } from "@/auth/config";
import { useSearchParams } from "next/navigation";

export default function SocialLogin() {
  const auth_provides = authConfig.providers.map((p) => p.name);
  const auth_socials = authSocials.filter((a) =>
    auth_provides.includes(a.name)
  );
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || Routes.DASHBOARD;

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {auth_socials.map((social) => (
          <Button
            key={social.name}
            onClick={() => signIn(social.id, { callbackUrl })}
            variant="outline"
            className="flex flex-row gap-2 items-center"
          >
            <social.icon />
            {social.name}
          </Button>
        ))}
      </div>
    </>
  );
}
