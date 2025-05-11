"use client";

import { useState, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WalletInfo from "@/components/wallet/wallet";

export function WalletApp() {
  const { publicKey, connected, connecting, wallet, disconnect } = useWallet();
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const fetchBalance = useCallback(async () => {
    if (!publicKey) return;

    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
      setError("");
    } catch (err) {
      console.error("Error fetching balance:", err);
      setError("Failed to fetch balance. Network may be congested.");
    }
  }, [publicKey]);

  const handleRetry = () => {
    setError("");
    if (publicKey) {
      fetchBalance();
    }
  };

  return (
    <section id="wallet" className="py-20 md:py-32 bg-web3-dark">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[80vh] gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRetry}
                  className="ml-2"
                >
                  Retry
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {connecting ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Connecting...</h2>
                <p className="text-muted-foreground">
                  Please approve the connection in your wallet
                </p>
              </div>
            </div>
          ) : connected && publicKey ? (
            <WalletInfo
              wallet={wallet}
              publicKey={publicKey}
              connected={connected}
              disconnect={disconnect}
              balance={balance}
              setError={setError}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
                <p className="text-muted-foreground">
                  Connect your Solana wallet to view your balance and
                  transactions
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
