import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatAddress } from "@/components/wallet/utils";
import { PublicKey } from "@solana/web3.js";
import { Copy } from "lucide-react";

interface Props {
  publicKey: PublicKey;
  balance: number;
}

export function AddressInfo({ publicKey, balance }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardDescription>Your Address</CardDescription>
        <div className="flex items-center gap-2">
          <code className="text-sm font-mono bg-muted p-1 rounded">
            {formatAddress(publicKey)}
          </code>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              navigator.clipboard.writeText(publicKey.toString());
            }}
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy address</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{balance.toFixed(4)} SOL</div>
        <div className="text-sm text-muted-foreground">
          ≈ ${(balance * 150).toFixed(2)} USD
        </div>
      </CardContent>
    </Card>
  );
}
