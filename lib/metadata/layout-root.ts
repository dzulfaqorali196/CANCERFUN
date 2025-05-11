import { Metadata } from "next";

export const metadataLayoutRoot: Metadata = {
  title: {
    template: "%s | CancerCoin",
    default: "CancerCoin - Fund Decentralized Cancer Research",
  },
  description:
    "CancerCoin empowers a global community to fund decentralized cancer research using $CANCER on Solana’s blockchain, driving innovation in immunotherapy and AI diagnostics.",
  keywords: [
    "CancerCoin",
    "BIO token",
    "Solana blockchain",
    "decentralized cancer research",
    "Web3",
    "cancer research funding",
    "immunotherapy",
    "AI diagnostics",
  ],
  metadataBase: new URL("https://cancercoin.fun"),
  openGraph: {
    title: "CancerCoin - Fund Decentralized Cancer Research",
    description:
      "CancerCoin empowers a global community to fund decentralized cancer research using $CANCER on Solana’s blockchain.",
    url: "https://cancercoin.fun",
    siteName: "CancerCoin",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CancerCoin - Fund Decentralized Cancer Research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CancerCoin - Fund Decentralized Cancer Research",
    description:
      "CancerCoin empowers a global community to fund decentralized cancer research using $CANCER on Solana.",
    images: ["/images/og-image.png"],
    site: "@cancercoin",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cancercoin.fun",
  },
};
