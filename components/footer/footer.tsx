export const Footer: React.FC = () => (
  <footer className="w-full border-t border-border text-sm py-6 px-4 sm:px-8 mt-12 font-mono">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
      <span>
        🏗️ Built with love by{" "}
        <a
          href="https://shan8851.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          shan8851.eth
        </a>
      </span>
      <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} ContractStudio</span>
    </div>
  </footer>
);
