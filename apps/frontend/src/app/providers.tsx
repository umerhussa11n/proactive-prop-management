'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

///curently just React Query Provider is returned however in Future if Theme proivder or Auth Provider
// needs to be included they could be imported and then we can return those from here.
export function Providers({ children }: { children: React.ReactNode }) {
  // Create a client instance
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered stale after 5 minutes
        staleTime: 5 * 60 * 1000,
        // Don't refetch on window focus in development
        refetchOnWindowFocus: false,
        // Retry failed requests up to 3 times
        retry: (failureCount, error) => {
          // Don't retry on 404s
          if (error instanceof Error && 'status' in error && error.status === 404) {
            return false;
          }
          return failureCount < 3;
        },
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* DevTools - only shows in development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
