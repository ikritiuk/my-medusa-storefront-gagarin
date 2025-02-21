"use client";

import "styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    <body>
    <main className="relative">{children}</main>
    </body>
    </html>
  );
}
