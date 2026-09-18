import type { ReactNode } from 'react';

interface FormDataLayoutProps {
  children: ReactNode;
}

/** Full-screen luxury layout shell for the form-data module. */
export function FormDataLayout({ children }: FormDataLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      {children}
    </div>
  );
}
