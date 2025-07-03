"use client";

import { Button } from "@/components/ui/button";
import { useConnect } from "wagmi";

export const WalletOptions: React.FC = () => {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex flex-col gap-y-3">
      {connectors.map((connector) => (
        <Button
          variant='outline'
          key={connector.uid}
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </Button>
      ))}
    </div>
  );
};
