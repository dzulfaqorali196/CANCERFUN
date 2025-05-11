"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Wallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { AddressInfo } from "@/components/wallet/cards/address-info";
import TransactionHistory from "@/components/wallet/cards/transaction-history";
import TransactionForm from "@/components/wallet/tabs";
// import { Connection, clusterApiUrl } from "@solana/web3.js";

export type Transaction = {
  id: string;
  type: "receive" | "send";
  amount: number;
  from?: string;
  to?: string;
  timestamp: string;
};

interface Props {
  wallet: Wallet | null;
  publicKey: PublicKey;
  connected: boolean;
  disconnect: () => Promise<void>;
  balance: number;
  setError: Dispatch<SetStateAction<string>>;
}

export default function WalletInfo({
  wallet,
  publicKey,
  connected,
  disconnect,
  balance,
  setError,
}: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const connection = new Connection(clusterApiUrl("devnet"));

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Unhandled error:", event.error);
      if (event.error && event.error.name === "WalletConnectionError") {
        setError(
          "Failed to connect to wallet. Please try again or use a different wallet."
        );
        if (disconnect) {
          disconnect().catch(console.error);
        }
      }
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, [disconnect, setError]);

  const handleSend = () => {
    if (!wallet || !publicKey) {
      setError("Wallet not connected");
      return;
    }
    setIsLoading(true);
    try {
      setTimeout(() => {
        setTransactions([
          {
            id: `tx${Date.now()}`,
            type: "send",
            amount: Number.parseFloat(sendAmount),
            to: recipientAddress,
            timestamp: new Date().toISOString(),
          },
          ...transactions,
        ]);
        setRecipientAddress("");
        setSendAmount("");
        setIsLoading(false);
        setError("");

        alert(`Sending ${sendAmount} SOL to ${recipientAddress}`);
      }, 1000);
    } catch (err) {
      console.error("Error sending transaction:", err);
      setError("Failed to send transaction");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchWalletData = async () => {
      if (!publicKey) return;
      // const lamports = await connection.getBalance(publicKey);
      // const sigs = await connection.getSignaturesForAddress(publicKey, {
      //   limit: 5,
      // });
      // const txns = await Promise.all(
      //   sigs.map(async (sig) => {
      //     const tx = await connection.getParsedTransaction(sig.signature);
      //     return tx;
      //   })
      // );
    };
    if (connected) {
      fetchWalletData();
    }
  }, [publicKey, connected]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AddressInfo publicKey={publicKey} balance={balance} />
      <TransactionForm
        setRecipientAddress={setRecipientAddress}
        setSendAmount={setSendAmount}
        recipientAddress={recipientAddress}
        handleSend={handleSend}
        sendAmount={sendAmount}
        isLoading={isLoading}
        publicKey={publicKey}
      />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
