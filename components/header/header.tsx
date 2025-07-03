import { Account } from "@/components/account";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="font-extrabold text-3xl">Contract Studio</h1>
        <div className="flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
          <Account />
        </div>
      </div>
    </header>
  );
};
