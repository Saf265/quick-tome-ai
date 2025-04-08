"use client";

import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};

export default QueryClientProvider;
