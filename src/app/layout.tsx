"use client";

import { MedusaProvider } from "medusa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "styles/globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    <body>
    <QueryClientProvider client={queryClient}>
      <MedusaProvider baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"}>
        <main className="relative">{children}</main>
      </MedusaProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
