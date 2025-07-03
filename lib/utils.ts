import { IAbiFunction } from '@/components/functionList/functionList';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

export function extractAbiFunctions(abi: any[]): IAbiFunction[] {
  return abi
    .filter((entry) => entry.type === 'function')
    .map((entry) => ({
      name: entry.name,
      inputs: entry.inputs || [],
      outputs: entry.outputs || [],
      stateMutability: entry.stateMutability,
    }));
}

export function extractViewFunctions(abi: any[]) {
  return abi.filter(
    (entry) =>
      (entry.type === 'function' && entry.stateMutability === 'view') ||
      entry.stateMutability === 'pure'
  );
}

export function extractWriteFunctions(abi: any[]) {
  return abi.filter(
    (entry) =>
      entry.type === 'function' &&
      entry.stateMutability === 'payable' &&
      entry.stateMutability === 'nonpayable'
  );
}
