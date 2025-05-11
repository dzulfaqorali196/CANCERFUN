import { Routes } from "@/constants/routes";
import { NavMenuItem } from "@/types";

export const legalMenuItems: NavMenuItem[] = [
  {
    label: "Privacy Policy",
    href: Routes.PRIVACY_POLICY,
  },
  {
    label: "Terms of Service",
    href: Routes.TERMS_OF_SERVICE,
  },
  {
    label: "Cookie Policy",
    href: Routes.COOKIE_POLICY,
  },
];
