import { z } from "zod";

export const abiFormSchema = z.object({
  abi: z.string().refine((val) => {
    try {
      const parsed = JSON.parse(val);
      return Array.isArray(parsed);
    } catch {
      return false;
    }
  }, {
    message: "Invalid ABI: must be valid JSON array",
  }),
  address: z.string().refine((val) => /^0x[a-fA-F0-9]{40}$/.test(val), {
    message: "Invalid contract address",
  }),
});

export type AbiFormSchema = z.infer<typeof abiFormSchema>;
