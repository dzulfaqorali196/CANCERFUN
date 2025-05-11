import { FaqSection } from "@/components/faq-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | CancerCoin",
  description:
    "Explore answers to common questions about CancerCoin, $CANCER, and funding decentralized cancer research on Solana’s blockchain.",
  keywords: [
    "CancerCoin FAQ",
    "BIO token",
    "Solana blockchain",
    "decentralized cancer research",
    "Web3",
    "cancer research funding",
  ],
  metadataBase: new URL("https://cancercoin.fun"),
  openGraph: {
    title: "FAQ | CancerCoin",
    description:
      "Explore answers to common questions about CancerCoin, $CANCER, and funding decentralized cancer research on Solana’s blockchain.",
    url: "https://cancercoin.fun/faq",
    siteName: "CancerCoin",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CancerCoin FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | CancerCoin",
    description:
      "Explore answers to common questions about CancerCoin, $CANCER, and funding decentralized cancer research on Solana.",
    images: ["/images/og-image.png"],
    site: "@cancercoin",
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqSection />
    </>
  );
}
