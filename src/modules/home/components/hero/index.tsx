"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
  const categoriesRef = useRef(null)
  const { scrollY } = useScroll()
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  const backgroundY = useTransform(scrollY, [0, windowHeight], [0, -100])

  const handleVideoClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Desktop Version */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <motion.video
          style={{ y: backgroundY }}
          src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero.mp4"
          poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-preview.webp"
          className="w-full h-full object-cover absolute inset-0"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Откройте мир безграничных возможностей с <span className="text-blue-400">DJI</span>! 🚀
            </h1>
            <p className="text-lg md:text-xl mb-6">
              <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
              <span className="text-blue-300"> идеального контента и профессиональных съёмок</span>.
            </p>
            <div className="space-y-2 text-lg mb-8">
              <p><strong>Лучшие дроны DJI</strong> с официальной гарантией</p>
              <p><strong>Премиальные камеры, микрофоны и стабилизаторы</strong> для профессионалов</p>
              <p><strong>Выгодные цены и акции</strong> каждый день</p>
              <p>Быстрая доставка по всей России</p>
            </div>
            <motion.a
              href="/categories/dji-drones"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition inline-block"
            >
              Купить дрон
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div
          className="w-full relative flex items-center justify-center"
          style={{ height: "75vh" }}
          onClick={handleVideoClick}
        >
          <motion.video
            src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile.mp4"
            poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile-poster.avif"
            className="w-full h-full object-cover absolute inset-0"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center flex-col justify-center text-white text-center px-4 z-20"
          >
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-md mx-auto text-white drop-shadow-lg">
              Откройте мир <span className="text-[#FFC107]">DJI</span>! 🚀
            </h1>
            <p className="mt-3 text-base sm:text-lg max-w-sm mx-auto text-white drop-shadow-md">
              <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
              <span className="text-[#FFD700]"> идеального контента и съёмок</span>.
            </p>
            <motion.a
              href="/categories/dji-drones"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg text-base shadow-md transition inline-block"
            >
              Купить дрон
            </motion.a>
          </motion.div>
        </div>
        <div ref={categoriesRef} className="w-full text-center py-4 px-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold">Категории</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
