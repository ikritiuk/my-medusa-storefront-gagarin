import { Metadata } from "next"
import ContactsPage from "@modules/layout/templates/contacts"
import * as React from "react"

export const metadata: Metadata = {
  title: "Контакты",
  description: "Contacts page",
}

export default function LegalPage() {
  return <ContactsPage/>
}
