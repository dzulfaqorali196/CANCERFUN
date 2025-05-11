import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SetStateAction } from "react";
import { PublicKey } from "@solana/web3.js";

interface Props {
  publicKey: PublicKey;
  setRecipientAddress: (value: SetStateAction<string>) => void;
  setSendAmount: (value: SetStateAction<string>) => void;
  recipientAddress: string;
  handleSend: () => void;
  sendAmount: string;
  isLoading: boolean;
}

export default function TransactionForm({
  publicKey,
  setRecipientAddress,
  setSendAmount,
  recipientAddress,
  handleSend,
  sendAmount,
  isLoading,
}: Props) {
  return (
    <Tabs defaultValue="send" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="send">Send</TabsTrigger>
        <TabsTrigger value="receive">Receive</TabsTrigger>
      </TabsList>
      <TabsContent value="send">
        <Card>
          <CardHeader>
            <CardTitle>Send SOL</CardTitle>
            <CardDescription>
              Send SOL to another wallet address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="recipient">
                Recipient Address
              </label>
              <Input
                id="recipient"
                placeholder="Enter Solana address"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="amount">
                Amount (SOL)
              </label>
              <Input
                id="amount"
                type="number"
                placeholder="0.0"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={handleSend}
              disabled={
                !recipientAddress ||
                !sendAmount ||
                isNaN(Number.parseFloat(sendAmount)) ||
                isLoading
              }
            >
              {isLoading ? "Processing..." : "Send SOL"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="receive">
        <Card>
          <CardHeader>
            <CardTitle>Receive SOL</CardTitle>
            <CardDescription>Share your address to receive SOL</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-500">
                  QR Code Placeholder
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <code className="text-sm font-mono bg-muted p-2 rounded flex-1 overflow-hidden text-ellipsis">
                {publicKey?.toString()}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(publicKey.toString());
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy address</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
