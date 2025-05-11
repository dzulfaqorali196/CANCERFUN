"use client";

// import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function ConnectWalletButton({ className }: { className?: string }) {
  // const router = useRouter();
  // const {
  //   // publicKey,
  //   // connecting,
  //   connected,
  //   disconnecting,
  //   // wallet,
  // } = useWallet();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // useEffect(() => {
  //   if (connected && !disconnecting) {
  //     const timeout = setTimeout(() => {
  //       router.push("/wallet");
  //     }, 200);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [connected, disconnecting, router]);
  // const noWallet = !wallet && !connecting && !connected;

  if (!isMounted) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full opacity-50">
          Loading...
        </div>
      </div>
    );
  }
  return (
    <WalletMultiButton
      className={className}
      style={{ height: "40px", padding: "0 16px" }}
    />
  );
}
