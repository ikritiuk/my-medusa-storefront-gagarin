"use client"
import { useState } from "react"
import { motion } from "framer-motion"

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
      className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
      data-testid="mobile-cart-button"
    >
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
