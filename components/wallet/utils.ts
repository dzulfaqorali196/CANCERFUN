import { PublicKey } from "@solana/web3.js";

export const formatAddress = (address: PublicKey) => {
  if (!address) return "";
  const addressStr = address.toString();
  return `${addressStr.slice(0, 4)}...${addressStr.slice(-4)}`;
};

export const formatTime = (timestamp: number | string) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
