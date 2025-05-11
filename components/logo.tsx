import { SiteSettings } from "@/constants/settings";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaRibbon } from "react-icons/fa";

type LogoProps = {
  variant?: "image" | "text";
  className?: string;
};

export default function Logo({ variant = "image", className = "" }: LogoProps) {
  if (variant === "text") {
    return (
      <div
        className={cn(
          `text-xl font-bold tracking-wide flex flex-row items-center gap-3`,
          className
        )}
      >
        <FaRibbon className="text-web3-light" />
        <div className="flex flex-row gap-1">
          Cancer <span className="text-green-600">Coin</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src="/images/cancercoin-logo.png"
      alt={SiteSettings.title.full}
      className={cn("w-32 h-32 object-contain", className)}
      width={200}
      height={200}
    />
  );
}
