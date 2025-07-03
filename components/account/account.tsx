"use client";

import Image from "next/image";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { ConnectDialog } from "../connectDialog/connectDialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/lib/utils";

export const Account: React.FC = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ens } = useEnsName({ address, chainId: 1 });
  const { data: avatar } = useEnsAvatar({ name: ens ?? undefined, chainId: 1 });

  if (!address) return <ConnectDialog />;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2 px-3 py-1.5 bg-surface rounded-full hover:bg-muted transition border border-border shadow-sm hover:cursor-pointer text-primary">
          {avatar ? (
            <Image src={avatar} alt="ENS Avatar" height={100} width={100} className="size-7 rounded-full" />
          ) : (
            <div className="size-7 rounded-full bg-neutral-400" />
          )}
          <span className="text-sm font-mono">{ens ?? shortenAddress(address)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={8}
      >
        <Button
          variant="ghost"
          onClick={() => disconnect()}
        >
          Disconnect
        </Button>
      </PopoverContent>
    </Popover>
  );
};
