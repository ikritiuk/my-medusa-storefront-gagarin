import { Metadata } from "next"
import LegalPage from "@modules/layout/templates/legal"
import * as React from "react"

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Legal page",
}

export default function LegalPage() {
  return <LegalPage/>
}
