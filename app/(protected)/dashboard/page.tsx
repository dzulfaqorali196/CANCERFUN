import { auth } from "@/auth";
import { Routes } from "@/constants/routes";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect(Routes.SIGNIN);
  } else {
    redirect("/dashboard/overview");
  }
}
