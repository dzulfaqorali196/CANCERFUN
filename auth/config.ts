import type { NextAuthConfig } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
// import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";

import { credentialConfig } from "@/auth/credentials";
import { authCallbacks } from "@/auth/callbacks";

import {
  GoogleConfig,
  // GithubConfig,
  // FacebookConfig,
  TwitterConfig,
} from "./socials";

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider(GoogleConfig),
    // GithubProvider(GithubConfig),
    // FacebookProvider(FacebookConfig),
    TwitterProvider(TwitterConfig),
    CredentialsProvider(credentialConfig),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: "/welcome",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: authCallbacks,
};
