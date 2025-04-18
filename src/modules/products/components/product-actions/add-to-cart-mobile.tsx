"use client"
import { default as React, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@medusajs/ui"
import { ShoppingCart } from "lucide-react"

const AddToCartButtonMobile = ({ handleAddToCart, inStock, variant, isAdding }) => {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    handleAddToCart()
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={handleClick}
      disabled={!inStock || !variant || isAdding}
      className={`relative top-[-24px] w-full h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
      data-testid="mobile-cart-button"
    >
      <ShoppingCart size={18} />
      {added
        ? "Добавлено!"
        : !variant
          ? "Выбрать вариант"
          : !inStock
            ? "Нет в наличии"
            : "Добавить в корзину"}
    </motion.button>
  )
}

export default AddToCartButtonMobile
