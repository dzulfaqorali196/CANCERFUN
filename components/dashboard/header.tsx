import AuthMenu from "@/components/auth/auth-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardHeader() {
  return (
    <header className="shadow-sm p-4 flex justify-between items-center border-b border-accent">
      <h1 className="text-lg font-semibold ">MyApp Dashboard</h1>
      <div className="items-center space-x-4 hidden md:flex">
        <ThemeToggle />
        <AuthMenu />
      </div>
    </header>
  );
}
