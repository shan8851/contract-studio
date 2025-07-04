'use client';

import { AbiInputForm } from '@/components/abiInputForm/abiInputForm';
import { FunctionList } from '@/components/functionList/functionList';
import { extractAbiFunctions } from '@/lib/utils';
import { useState } from 'react';

export const Main = () => {
  const [abi, setAbi] = useState<unknown[] | null>(null);
  const [contractAddress, setContractAddress] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6 w-full">
      <div className="flex flex-col items-center justify-center gap-4 py-6 w-full">
        <AbiInputForm
          onAbiParsed={(parsedAbi, address) => {
            setAbi(parsedAbi);
            setContractAddress(address);
          }}
        />
        {abi && (
          <div className="mt-8 w-full flex justify-center">
            <FunctionList
              functions={extractAbiFunctions(abi)}
              contractAddress={contractAddress}
              abi={abi}
            />
          </div>
        )}
      </div>
    </div>
  );
};
