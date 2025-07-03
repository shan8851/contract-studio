import { WalletOptions } from "@/components/connectDialog/walletOptions";
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const ConnectDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="font-medium text-small bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 px-4 py-2 rounded hover:cursor-pointer">
        Connect
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          aria-describedby={undefined}
        >
          <DialogTitle className="text-lg font-semibold mb-4">Connect Wallet</DialogTitle>
          <WalletOptions />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
