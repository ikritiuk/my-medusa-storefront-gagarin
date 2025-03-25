"use client"
import { useRef } from "react"
import Image from "next/image"

const Hero = () => {
  const categoriesRef = useRef(null)

  const handleVideoClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black-800 bg-opacity-30 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Откройте мир безграничных возможностей с <span className="text-blue-400">DJI</span>! 🚀
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
              <span className="text-blue-300"> идеального контента и профессиональных съёмок</span>.
            </p>

            <div className="mt-6 space-y-2 text-lg">
              <p><strong>Лучшие дроны DJI</strong> с официальной гарантией</p>
              <p><strong>Премиальные камеры, микрофоны и стабилизаторы</strong> для профессионалов</p>
              <p><strong>Выгодные цены и акции</strong> каждый день</p>
              <p>Быстрая доставка по всей России</p>
            </div>

            <div className="mt-8">
              <a href="/categories/dji-drones"
                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">
                Выбрать дрон
              </a>
            </div>
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

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="relative bg-ui-bg-subtle">
          <div
            className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden flex items-center justify-center"
            style={{ height: "85vh" }}
            onClick={handleVideoClick}
          >
            <div className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center animate-fade-in">
              <div className="flex flex-col items-center text-center px-4 py-6">
                <Image
                  src="/logo.svg"
                  alt="Gagarin Logo"
                  width={120}
                  height={120}
                  className="invert w-64 h-64 block lg:hidden"
                />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md mx-auto">
                  Откройте мир <span className="text-[#FFC107]">DJI</span>! 🚀
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md mx-auto">
                  <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
                  <span className="text-[#FFD700]"> идеального контента и профессиональных съёмок</span>.
                </p>
              </div>
            </div>

            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile-poster.avif"
              className="w-full h-full object-cover"
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
