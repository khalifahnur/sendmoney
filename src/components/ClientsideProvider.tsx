"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// Create a client-side provider component
export default function QueryProvider({ children }: { children: ReactNode }) {
  // Use useState to create the QueryClient instance only on the client side
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}