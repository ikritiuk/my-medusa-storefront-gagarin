"use client"

import { useCart } from "@medusajs/react"
import Link from "next/link"
import { useMemo } from "react"

const MobileCartButton = () => {
  const { cart } = useCart()

  const cartCount = useMemo(() => {
    if (!cart?.items) return 0
    return cart.items.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart])

  return (
    <Link
      href="/cart"
      className="relative flex flex-col items-center text-xs text-gray-700 hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.3a1 1 0 001 1.2h12.6a1 1 0 001-1.2L17 13M7 13l-4-8m4 8l4-8"
        />
      </svg>
      Корзина
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          {cartCount}
        </span>
      )}
    </Link>
  )
}

export default MobileCartButton
