import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useReadContract } from "wagmi";

export interface IFunctionFormProps {
  fnAbi: any;
  contractAddress: string;
  chainId?: number;
  abi: any[];
}

export const FunctionForm: React.FC<IFunctionFormProps> = ({
  fnAbi,
  contractAddress,
  chainId = 1,
  abi,
}) => {
  const [inputs, setInputs] = useState<any>({});
  const [callArgs, setCallArgs] = useState<any[] | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const { data, error, isLoading } = useReadContract({
    abi,
    address: contractAddress as `0x${string}`,
    functionName: fnAbi.name,
    args: callArgs,
    chainId,
    query: { enabled: submitted },
  });

  function handleChange(name: string, value: any) {
    setInputs((prev: any) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const argArray = fnAbi.inputs.map((input: any) => {
      if (input.type.startsWith('uint') || input.type.startsWith('int')) {
        return inputs[input.name] ? BigInt(inputs[input.name]) : BigInt(0);
      }
      if (input.type === 'bool') {
        return Boolean(inputs[input.name]);
      }
      return inputs[input.name] ?? '';
    });
    setCallArgs(argArray);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {fnAbi.inputs.map((input: any, idx: number) => (
        <div key={input.name + idx}>
          <label className="block text-xs mb-1 font-mono">
            {input.name || `arg${idx}`}{' '}
            <span className="text-muted-foreground">({input.type})</span>
          </label>
          <Input
            name={input.name}
            type={
              input.type === 'bool'
                ? 'checkbox'
                : input.type.startsWith('uint')
                ? 'number'
                : 'text'
            }
            value={inputs[input.name] || ''}
            onChange={(e) =>
              handleChange(
                input.name,
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
              )
            }
            className="w-full"
          />
        </div>
      ))}
      <Button type="submit" className="mt-2 w-full">
        Call
      </Button>
      {isLoading && (
        <div className="text-xs mt-2 text-muted-foreground">Loading...</div>
      )}
      {error && (
        <div className="text-xs mt-2 text-red-500">{error.message}</div>
      )}
      {data !== undefined && (
        <div className="mt-2 text-xs bg-muted p-2 rounded font-mono">
          Result: {JSON.stringify(data)}
        </div>
      )}
    </form>
  );
};
