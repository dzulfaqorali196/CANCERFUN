import { ArrowUpRight, ArrowDownLeft, Clock, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatTime } from "@/components/wallet/utils";
import { Button } from "@/components/ui/button";
import { Transaction } from "@/components/wallet/wallet";

export default function TransactionHistory({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    tx.type === "receive" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {tx.type === "receive" ? (
                    <ArrowDownLeft className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    {tx.type === "receive" ? "Received" : "Sent"} SOL
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatTime(tx.timestamp)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-medium ${
                    tx.type === "receive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "receive" ? "+" : "-"}
                  {tx.amount} SOL
                </div>
                <div className="text-xs text-muted-foreground">
                  {tx.type === "receive" ? `From: ${tx.from}` : `To: ${tx.to}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" size="sm" className="text-xs">
          View on Explorer <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}
