import type React from "react";
import "@/styles/fonts/neue-montreal/stylesheet.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { auth } from "@/auth";
import SessionWrapper from "@/components/auth/session-wrapper";
import { metadataLayoutRoot } from "@/lib/metadata/layout-root";
import { AppWalletProvider } from "@/components/wallet/provider";
import { MyProviders } from "@/app/providers";

export const metadata = metadataLayoutRoot;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background antialiased"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <SessionWrapper session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <MyProviders>
              <AppWalletProvider>{children}</AppWalletProvider>
            </MyProviders>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
