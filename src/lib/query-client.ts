import { QueryClient } from '@tanstack/react-query';

/**
 * Shared QueryClient singleton.
 * Imported by <AppProviders /> — do not create another client per file.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

/** Centralised query-key factory so invalidations stay consistent. */
export const queryKeys = {
  leads: ['leads'] as const,
  lead: (id: string | number) => ['leads', id] as const,
};
