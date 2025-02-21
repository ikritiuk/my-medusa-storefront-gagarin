"use client";

import { getBaseURL } from "@lib/util/env";
import { Metadata } from "next";
import { MedusaProvider } from "medusa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "styles/globals.css";

const queryClient = new QueryClient();

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    <body>
    <QueryClientProvider client={queryClient}>
      <MedusaProvider baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"}>
        <main className="relative">{props.children}</main>
      </MedusaProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
