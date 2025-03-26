"use client"
import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"

const Hero = () => {
  // Disable automatic scroll restoration & reset scroll to top on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
    }
  }, [])

  const categoriesRef = useRef(null)
  const categoriesDesktopRef = useRef(null)

  const handleVideoClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDesktopButtonClick = () => {
    if (categoriesDesktopRef.current) {
      categoriesDesktopRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.8 },
    }),
  }

  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black-800 bg-opacity-30 z-20">
          <div className="text-center text-white px-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Откройте мир безграничных возможностей с <motion.span
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
              className="text-blue-400 inline-block"
            >DJI 🚀</motion.span>!
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="mt-4 text-lg md:text-xl"
            >
              <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
              <span className="text-blue-300"> идеального контента и профессиональных съёмок</span>.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-6 space-y-2 text-lg"
            >
              <p><strong>Лучшие дроны DJI</strong> с официальной гарантией</p>
              <p><strong>Премиальные камеры, микрофоны и стабилизаторы</strong> для профессионалов</p>
              <p><strong>Выгодные цены и акции</strong> каждый день</p>
              <p>Быстрая доставка по всей России</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-8"
            >
              <button
                onClick={handleDesktopButtonClick}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition hover:animate-pulse"
              >
                Смотреть каталог DJI
              </button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <video
          src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero.mp4"
          poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-preview.webp"
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Title Section */}
      <div className="hidden lg:block w-full text-center my-6"
           ref={categoriesDesktopRef}>
        <h2 className="text-xl font-bold">Категории товаров</h2>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-drones">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-drones.avif"
                    alt="DJI"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Дроны</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-glasses-cornrollers">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-drones-accessorises.avif"
                    alt="DJI: Аксессуары"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Очки и системы управления</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-cameras">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-cameras.avif"
                    alt="DJI Камеры"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Камеры</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base py-8">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-microphones">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-microphones.avif"
                    alt="DJI Микрофоны"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Микрофоны</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-stabisators">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-stabisators.avif"
                    alt="DJI Аккумуляторы и зарядные устройства"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Стабилизаторы</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/categories/dji-parts">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-parts.avif"
                    alt="DJI Запасные части и ремонтные комплекты"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">DJI Аккумуляторы, Запасные части и ремонтные комплекты</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout улучшенный */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="relative bg-ui-bg-subtle">
          <div
            className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden flex items-center justify-center cursor-pointer"
            style={{ height: "75vh" }}
            onClick={handleVideoClick}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute justify-center inset-0 flex items-center flex-col bg-black bg-opacity-50 text-white text-center px-4 z-20"
            >
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md mx-auto text-white drop-shadow-lg">
                Откройте мир <span className="text-[#FFC107]">DJI</span>! 🚀
              </h1>
              <p className="mt-3 text-base sm:text-lg max-w-sm mx-auto text-white drop-shadow-md">
                <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
                <span className="text-[#FFD700]"> идеального контента и съёмок</span>.
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-white text-3xl mt-4"
              >
                ↓
              </motion.div>
            </motion.div>

            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile-poster.avif"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div
            ref={categoriesRef}
            className="w-full text-center py-4 px-4 bg-white shadow-md"
          >
            <h2 className="text-lg font-semibold">Категории</h2>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 gap-4">

          {/* Brand Images */}
          <div className="flex flex-col items-center gap-4">
            {/* Brand Images */}
            <div
              className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-2/3 lg:h-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                DJI Дроны
              </div>
              <Link href="/categories/dji-drones">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-drones.avif"
                  alt="DJI Дроны"
                  className="w-full h-full object-cover rounded shadow-lg transition-transform duration-500 hover:scale-110"
                />
              </Link>
            </div>

            {/* Grid with Swipeable Effect */}
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  DJI Очки и системы управления
                </div>
                <Link href="/categories/dji-glasses-cornrollers">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-drones-accessorises.avif"
                    alt="DJI Очки и системы управления"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg aspect-square">
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                  DJI Камеры
                </div>
                <Link href="/categories/dji-cameras">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-cameras.avif"
                    alt="DJI Камеры"
                    className="w-full h-full object-cover rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <div
              className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-2/3 lg:h-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                DJI Микрофоны
              </div>
              <Link href="/categories/dji-microphones">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-microphones.avif"
                  alt="DJI Микрофоны"
                  className="w-full h-full object-cover rounded shadow-lg transition-transform duration-500 hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  DJI Стабилизаторы
                </div>
                <Link href="/categories/dji-stabilizers">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-stabisators.avif"
                    alt="DJI Стабилизаторы"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  DJI Аккумуляторы, Запасные части и ремонтные комплекты
                </div>
                <Link href="/categories/dji-parts">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/dji-parts.avif"
                    alt="DJI Аккумуляторы, Запасные части и ремонтные комплекты"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

