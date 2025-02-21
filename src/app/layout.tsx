"use client";

import { MedusaProvider } from "medusa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "styles/globals.css";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    <body>
    <QueryClientProvider client={queryClient}>
      <MedusaProvider baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"}>
        {children}
      </MedusaProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
