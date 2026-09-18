import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { queryClient } from '@/lib/query-client';

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * Global providers: theme (light/dark) + react-query + toasts.
 * Used once in main.tsx.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
            },
            success: {
              iconTheme: { primary: 'var(--gold)', secondary: 'var(--navy)' },
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
