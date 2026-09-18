import type { ReactNode } from 'react';

interface FormDataLayoutProps {
  children: ReactNode;
}

/** Full-screen luxury layout shell for the form-data module. */
export function FormDataLayout({ children }: FormDataLayoutProps) {
  return (
    <div className="min-h-dvh w-full overflow-x-clip bg-background text-foreground">
      {children}
    </div>
  );
}
