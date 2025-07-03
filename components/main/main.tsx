'use client';

import { AbiInputForm } from '@/components/abiInputForm/abiInputForm';
import { FunctionList } from '@/components/functionList/functionList';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { extractAbiFunctions } from '@/lib/utils';
import { useState } from 'react';

export const Main = () => {
  const [abi, setAbi] = useState<unknown[] | null>(null);
  const [contractAddress, setContractAddress] = useState<string>('');

  // If you want to allow "reset", add a button
  const handleReset = () => setAbi(null);
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
            />
          </div>
        )}
      </div>
    </div>
  );
};
