import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Routes } from "@/constants/routes";

interface ModalTermsProps {
  handleAgreeAndPlay: () => void;
}

export function ModalTerms({ handleAgreeAndPlay }: ModalTermsProps) {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px] bg-web3-darker/90 border-web3-gray backdrop-blur-sm flex items-center justify-center flex-col">
        <DialogHeader className="sr-only">
          <DialogTitle className="text-white">
            Welcome to Web3Project
          </DialogTitle>

          <DialogDescription className="text-muted-foreground">
            By visiting our website, you agree to our Terms and Conditions.
            Please review them carefully before proceeding.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground text-center">
            Our Terms and Conditions outline your rights and responsibilities as
            a user of our platform. By clicking &quot;Agree&quot;, you confirm
            that you have read and understood these{" "}
            <Link
              className="font-bold text-white hover:text-web3-secondary hover:underline"
              href={Routes.TERMS_OF_SERVICE}
            >
              terms
            </Link>
            .
          </p>
        </div>
        <DialogFooter>
          <Button
            className="bg-web3-primary hover:bg-web3-primary/90"
            onClick={handleAgreeAndPlay}
          >
            Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
