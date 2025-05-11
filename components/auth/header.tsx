import Logo from "@/components/logo";
import { Routes } from "@/constants/routes";
import Link from "next/link";

export default function HeaderForm({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col space-y-2 text-center items-center">
      <Link href={Routes.HOME}>
        <Logo
          variant="image"
          className="md:hidden text-2xl lg:text-3xl mb-8 h-16 w-16"
        />
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
