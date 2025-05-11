"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Routes } from "@/constants/routes";
import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import AuthMenu from "@/components/auth/auth-menu";

const navItems = [
  { name: "Overview", href: Routes.DASHBOARD, icon: Home },
  { name: "Settings", href: Routes.SETTINGS, icon: Settings },
  { name: "Profile", href: Routes.PROFILE, icon: User },
];

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden w-64 shadow-md md:block border-r border-accent bg-web3-gray">
        <div className="p-4">
          <Logo variant="text" className="text-2xl font-bold" />
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-web3-light hover:bg-web3-light/10 hover:text-white transition-colors",
                pathname === item.href
                  ? "text-white border-r-4 border-web3-primary bg-web3-light/20"
                  : ""
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 right-4 z-50"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <div className="p-4">
              <Logo variant="text" className="text-xl font-bold" />
            </div>

            <div className="p-4">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between gap-2">
                <ThemeToggle />
                <AuthMenu />
              </div>
            </div>
            <nav className="mb-auto p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md",
                    pathname === item.href ? "bg-gray-100 text-gray-800" : ""
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
