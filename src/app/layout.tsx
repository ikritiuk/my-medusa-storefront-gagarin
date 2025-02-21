"use client"; // Ensure this is at the top

import { MedusaProvider } from "medusa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "styles/globals.css";
import { ReactNode, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()); // Ensure proper instantiation

  return (
    <html lang="en" data-mode="light">
    <body>
    {/* Ensuring MedusaProvider and QueryClientProvider wrap the entire app */}
    <QueryClientProvider client={queryClient}>
      <MedusaProvider baseUrl={process.env.MEDUSA_BACKEND_URL || "http://localhost:9000"}>
        {children}
      </MedusaProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
