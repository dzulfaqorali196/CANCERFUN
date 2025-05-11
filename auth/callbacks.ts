import { NextAuthConfig } from "next-auth";

export const authCallbacks: NextAuthConfig["callbacks"] = {
  async signIn({ account, profile, user, credentials }) {
    // Optional: Add logic to restrict logins (e.g., only allow certain domains)
    return true;
  },

  async redirect({ url, baseUrl }) {
    // Allow relative URLs (e.g., /committee/application/page/1)
    if (url.startsWith("/")) {
      return `${baseUrl}${url}`;
    }

    // Allow full URLs within the same origin
    if (url.startsWith(baseUrl)) {
      return url;
    }

    // Fallback to baseUrl (homepage) for invalid URLs
    return baseUrl;
  },

  async session({ session, token }) {
    if (token && session.user) {
      session.user.id = token.sub as string;

      // Optional: Include more from token
      // session.user.role = token.role as string;
    }
    return session;
  },

  async jwt({ token, user, account, profile }) {
    if (user) {
      // `user` only available on sign-in
      token.role = "user"; // or fetch from DB
    }
    return token;
  },
};
