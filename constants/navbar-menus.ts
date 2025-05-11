import { Routes } from "@/constants/routes";

export type NavMenuItem = {
  label: string;
  href: string;
  isSection?: boolean;
  isExternal?: boolean;
};

export const navMenuItems: NavMenuItem[] = [
  // { label: "Intro", href: Routes.INTRO },
  { label: "Projects", href: "#projects", isSection: true },
  { label: "Blog", href: "#blog", isSection: true },
  { label: "Contact", href: Routes.CONTACT },
  { label: "Docs", href: Routes.DOCUMENTATION, isExternal: true },
];
