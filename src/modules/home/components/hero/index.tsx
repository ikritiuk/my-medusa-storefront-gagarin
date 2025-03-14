"use client"

import { useState } from "react"
import Link from "next/link"

const trendingWatches = [
  {
    name: "Rolex Submariner Date Black Dial Blue Bezel",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/rolex-submariner-date-126619lb-white-gold-black-dial-blue-bezel-2023-rolex-41374317052148_1280x-1720021169543.jpg",
    link: "/products/rolex-submariner-date-126619-lb-white-gold-black-dial-blue-bezel",
  },
  {
    name: "Audemars Piguet Yellow Gold",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/audemars-piguet-royal-oak-15202ba-oo-1240ba-02-jumbo-40th-anniversary-extra-thin-yellow-gold-audemars-piguet-40258760081652_1280x-1720184726491.webp",
    link: "/products/audemars-piguet-royal-oak-extra-thin-yellow-gold",
  },
  {
    name: "Patek Philippe Nautilus Green Dial",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/patek-philippe-nautilus-5711-1a-014-stainless-steel-green-dial-patek-philippe-40297153462516_1280x-1720185629726.webp",
    link: "/collections/patek",
  },

  {
    name: "Rolex Submariner Yellow Gold Blue Dial",
    image: "https://medusajs-server.fra1.cdn.digitaloceanspaces.com/rolex-submariner-date-126613lb-stainless-steel-yellow-gold-blue-dial-2021-rolex-41593886769396_1280x-1720020948071.webp",
    link: "/products/rolex-submariner-date-126613-lb-stainless-steel-yellow-gold-blue-dial",
  },
]

const Hero = () => {
  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Large screen (lg and up) */}
      <div className="hidden lg:block h-[80vh] w-full border-b border-ui-border-base relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black-800 bg-opacity-30 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">Премиум дроны</h1>
            <p className="text-lg mb-4">
              Добро пожаловать в <strong>премиальный магазин дронов</strong>, где передовые технологии встречаются с
              безупречным качеством!
            </p>
            <p className="text-lg mb-4">
              Мы создали идеальное место для тех, кто ценит <strong>производительность, надежность и современные
              решения</strong>.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Почему выбирают нас?</h2>
            <ul className="list-disc pl-6 text-lg mb-4">
              <li><strong>ТОПовые модели</strong> – мы отбираем только лучшие дроны от мировых производителей.</li>
              <li><strong>Инновационные технологии</strong> – 4K-камеры, интеллектуальные системы полета и передовая
                стабилизация.
              </li>
              <li><strong>Гарантированное качество</strong> – проверенные комплектующие и надежная сборка.</li>
              <li><strong>Лучшие цены</strong> – премиум-дроны доступны каждому.</li>
              <li><strong>Поддержка экспертов</strong> – поможем выбрать идеальный дрон под ваши задачи.</li>
            </ul>

            <p className="text-3xl font-bold text-yellow-400 mt-6 mb-6 tracking-wide">
              Цены от 25 000 рублей
            </p>

            <a
              href="/collections/dji"
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded"
            >
              Подробнее
            </a>

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

      {/* Full-Width Image */}
      {/*<div className="hidden lg:block w-full">*/}
      {/*  <Link href="/collections/rolex">*/}
      {/*    <img*/}
      {/*      src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/row-rolex.jpg"*/}
      {/*      alt="Full Width Image"*/}
      {/*      className="w-full h-auto mt-6 object-cover cursor-pointer"*/}
      {/*    />*/}
      {/*  </Link>*/}
      {/*</div>*/}


      {/* Mobile Layout */}
      <div className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden">
        {/* Fancy Mobile Video Section */}
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute inset-x-4 top-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded z-20 text-center animate-fade-in">
            <p className="text-xl font-extrabold leading-relaxed mb-4">
              Премиум часы из высококачественных материалов из Европы.
            </p>            <p className="text-lg mb-4">Качество, доступное каждому, по выгодной цене.</p>
            <p className="text-2xl font-bold text-[#D4AF37] mt-4">
              Цены от 25 000 рублей
            </p>
          </div>
          <Link href="/collections/dji-drones" className="w-full">
            <video
              src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.mp4"
              poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-preview.avif"
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </Link>
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
            <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-3/4 lg:h-full">
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
            <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px] md:h-3/4 lg:h-full">
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
        <div className="lg:hidden relative mt-8 px-4">
          <h2 className="text-lg font-semibold text-center mb-8">
            Сейчас в тренде
          </h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">

            {trendingWatches.map((watch, index) => (
              <div key={index} className="flex-none w-80 shadow-lg rounded-lg">
                <Link href={watch.link}>
                  <div className="relative">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                      {watch.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

