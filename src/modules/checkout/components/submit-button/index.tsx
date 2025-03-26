"use client"

import { Button } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
                               children,
                               className = "",
                               "data-testid": dataTestId,
                             }: {
  children: React.ReactNode
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      size="large"
      type="submit"
      isLoading={pending}
      data-testid={dataTestId}
      className={`w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-lg rounded-lg shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </Button>
  )
}
