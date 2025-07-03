import { FunctionForm } from "@/components/functionList/functionForm";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";

export interface IAbiFunction {
  name: string;
  inputs: { name: string; type: string }[];
  outputs: { name: string; type: string }[];
  stateMutability: string;
}

export interface IFunctionListProps {
  functions: IAbiFunction[];
  contractAddress: string;
}

export const FunctionList: React.FC<IFunctionListProps> = ({ functions, contractAddress }) => {
  return (
     <Accordion type="single" collapsible className="w-full max-w-3xl">
      {functions.map((fn, idx) => (
        <AccordionItem key={fn.name + idx} value={fn.name + idx}>
          <AccordionTrigger>
            <span className="font-mono font-semibold">
              {fn.name}
              <span className="ml-2 text-xs text-muted-foreground">
                ({fn.stateMutability})
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm mb-2">
              <span className="font-semibold">Inputs:</span>
              {fn.inputs.length === 0
                ? <span className="ml-2 text-muted-foreground">None</span>
                : (
                  <ul className="ml-4">
                    {fn.inputs.map((input, i) => (
                      <li key={i}>
                        <span className="font-mono">{input.type}</span>{" "}
                        <span className="text-muted-foreground">{input.name || `(arg${i})`}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Outputs:</span>
              {fn.outputs.length === 0
                ? <span className="ml-2 text-muted-foreground">None</span>
                : (
                  <ul className="ml-4">
                    {fn.outputs.map((output, i) => (
                      <li key={i}>
                        <span className="font-mono">{output.type}</span>{" "}
                        <span className="text-muted-foreground">{output.name || `(out${i})`}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
             <FunctionForm fnAbi={fn} chainId={1} contractAddress={contractAddress} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
