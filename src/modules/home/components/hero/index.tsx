"use client"
import Link from "next/link"

const Hero = () => {
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
              <a href="/collections/dji-drones"
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

      {/* Title Section */}
      <div className="hidden lg:block w-full text-center my-6">
        <h2 className="text-xl font-bold">Категории товаров</h2>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/dji-drones">
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
              <Link href="/collections/dji-glasses-cornrollers">
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
              <Link href="/collections/dji-cameras">
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
              <Link href="/collections/dji-microphones">
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
              <Link href="/collections/dji-stabisators">
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
              <Link href="/collections/dji-parts">
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

      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        {/* Fancy Mobile Video Section */}
        <div className="relative w-full overflow-hidden">
          <!-- Black overlay with text -->
          <div className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center animate-fade-in">
            <div className="text-center text-white px-4 py-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-md mx-auto">
                Откройте мир безграничных возможностей с <span className="text-[#FFC107]">DJI</span>! 🚀
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md mx-auto">
                <strong>Топовые дроны, камеры, микрофоны и стабилизаторы DJI</strong> — всё, что нужно для
                <span className="text-[#FFD700]"> идеального контента и профессиональных съёмок</span>.
              </p>
            </div>
          </div>

          <!-- Video Background -->
          <Link href="/collections/dji-drones" className="w-full">
            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-mobile-poster.avif"
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>

          <!-- Button moved to the bottom -->
          <div className="w-full flex justify-center mt-4 mb-6">
            <a href="/collections/dji-drones"
               className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-4 px-8 rounded-lg text-lg sm:text-xl transition block sm:inline-block w-[90%] sm:w-auto text-center">
              Выбрать дрон
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Title Section */}
          <div className="flex items-center justify-center h-auto py-4 px-4">
            <h2 className="text-lg font-semibold text-center max-w-[90%]">Категории</h2>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 gap-4">

          {/* Brand Images */}
          <div className="flex flex-col items-center gap-4">
            {/* Brand Images */}
            <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-2/3 lg:h-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                DJI Дроны
              </div>
              <Link href="/collections/dji-drones">
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
                <Link href="/collections/dji-glasses-cornrollers">
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
                <Link href="/collections/dji-cameras">
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
            <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-2/3 lg:h-full">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
                DJI Микрофоны
              </div>
              <Link href="/collections/dji-microphones">
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
                <Link href="/collections/dji-stabisators">
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
                <Link href="/collections/dji-parts">
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

