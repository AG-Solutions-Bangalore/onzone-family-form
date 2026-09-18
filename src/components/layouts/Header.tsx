import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <p className="eyebrow">Onzone</p>
          <h1 className="text-lg">Data Form</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
