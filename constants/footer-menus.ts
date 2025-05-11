import { Routes } from "@/constants/routes";
import { FooterMenu } from "@/types";

export const footerMenus: FooterMenu[] = [
  {
    title: "Research & Impact",
    links: [
      { label: "Projects", href: Routes.PROJECTS },
      { label: "Token Metrics", href: Routes.TOKEN_METRICS },
      { label: "Whitepaper", href: Routes.WHITEPAPER },
      { label: "Roadmap", href: Routes.ROADMAP },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Blog", href: Routes.BLOG },
      { label: "Discord", href: "https://discord.com/invite/cancercoin" },
      { label: "Twitter", href: "https://twitter.com/cancercoin" },
      { label: "Documentation", href: Routes.DOCUMENTATION },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About", href: Routes.ABOUT },
      { label: "Contact", href: Routes.CONTACT },
      { label: "Committee", href: Routes.COMMITTEE },
      { label: "FAQ", href: Routes.FAQ },
    ],
  },
];
