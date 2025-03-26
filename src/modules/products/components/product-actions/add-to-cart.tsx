"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const AddToCartButton = ({ handleAddToCart, inStock, selectedVariant, disabled, isAdding, isValidVariant, options }) => {
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
      disabled={
        !inStock || !selectedVariant || disabled || isAdding || !isValidVariant
      }
      className={`w-full h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
      data-testid="add-product-button"
    >
      {added
        ? "Добавлено!"
        : !selectedVariant && !options
          ? "Выбрать вариант"
          : !inStock || !isValidVariant
            ? "Нет в наличии"
            : "Добавить в корзину"}
    </motion.button>
  )
}

export default AddToCartButton
