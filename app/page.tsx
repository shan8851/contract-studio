import { Main } from '@/components/main/main';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-3xl">
        Paste a{' '}
        <span className="font-extrabold text-primary">contract address</span> or{' '}
        <span className="font-extrabold text-primary">ABI</span>. Get a UI. Call
        any function
      </h1>
      <Main />
    </div>
  );
}
