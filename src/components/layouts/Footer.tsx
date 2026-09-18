export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
        <p className="eyebrow">Onzone</p>
        <p>© {year} House of Onzone. All rights reserved.</p>
      </div>
    </footer>
  );
}
