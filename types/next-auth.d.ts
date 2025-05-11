import "next-auth";

declare module "next-auth" {
  interface User {
    imageUrl?: string;
    fullName?: string | null;
    emailAddresses: Array<{ emailAddress: string }>;
    country?: string;
    twitter?: string;
    linkedin?: string;
    telegram?: string;
    discord?: string;
    affiliation?: string;
    title?: string;
    preferred_contact?:
      | "email"
      | "twitter"
      | "linkedin"
      | "telegram"
      | "discord";
  }

  interface Session {
    user: User;
  }
}
