import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { abiFormSchema, AbiFormSchema } from "@/lib/abiFormSchema";
import { dummyAbi } from "@/app/data/dummyAbi"; // Use your ERC20 ABI

export function AbiInputForm({
  onAbiParsed,
}: {
  onAbiParsed: (abi: unknown[], address: string) => void;
}) {
  const form = useForm<AbiFormSchema>({
    resolver: zodResolver(abiFormSchema),
    defaultValues: { abi: "", address: "" },
  });

  function onSubmit(values: AbiFormSchema) {
    const parsedAbi = JSON.parse(values.abi);
    onAbiParsed(parsedAbi, values.address);
  }

  function useTest() {
    // USDC Mainnet
    onAbiParsed(dummyAbi, '0xCa6CB9FF7dD3623AD1d697a2F94949Ff8059B00B');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-3xl"
      >
        <FormField
          control={form.control}
          name="abi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paste Contract ABI (JSON array)</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={10}
                  placeholder="Paste your ABI here"
                  className="font-mono"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0x..." className="font-mono" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Load ABI & Address
        </Button>
        <Button
          variant="secondary"
          type="button"
          className="w-full"
          onClick={useTest}
        >
          Use test ERC20
        </Button>
      </form>
    </Form>
  );
}
