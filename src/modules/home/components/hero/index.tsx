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
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">Премиум часы</h1>
            <p className="text-lg mb-4">Премиум часы
              Изготовлены из премиальной стали 904L и оснащены лучшими механизмами на рынке.</p>
            <p className="text-lg mb-4">Эти часы подчеркнут Ваш безупречный стиль.</p>
            <p className="text-lg mb-4">Только самые популярные модели с непревзойденным качеством исполнения.</p>
            <p className="text-lg mb-4">Качество, доступное каждому, по выгодной цене.</p>

            <p className="text-3xl font-bold text-yellow-400 mt-6 mb-6 tracking-wide">
              Цены от 25 000 рублей
            </p>

            <Link
              href="/collections/rolex"
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded"
            >
              Подробнее
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <video
          src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero.mp4"
          poster="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/panda-hero-preview.jpg"
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
        <h2 className="text-xl font-bold">Популярные бренды</h2>
      </div>

      {/* Row of 3 Images */}
      <div className="hidden lg:block w-full border-b border-ui-border-base">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/rolex">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex-daytona.avif"
                    alt="Rolex"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Rolex</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/piguet">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-piguet.avif"
                    alt="Audemars Piguet"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Audemars Piguet</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/patek">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek.avif"
                    alt="Patek Philippe"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Patek Philippe</span>
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
              <Link href="/collections/cartier">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/cartier-hero.avif"
                    alt="Cartier"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Cartier</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/tag-heuer">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/th-hero.avif"
                    alt="Tag Hauer"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Tag Hauer</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative cursor-pointer transition-transform hover:scale-105">
              <Link href="/collections/hublot">
                <div className="relative">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hublot-hero.avif"
                    alt="Hublot"
                    className="rounded shadow-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">Hublot</span>
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
          <Link href="/collections/rolex" className="w-full">
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
            <h2 className="text-lg font-semibold text-center max-w-[90%]">Популярные бренды</h2>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6 gap-4">

          {/* Brand Images */}
          <div className="flex flex-col items-center gap-4">
            {/* Brand Images */}
            <div className="relative text-center w-full rounded shadow-lg">
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                Rolex
              </div>
              <Link href="/collections/rolex">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-rolex.avif"
                  alt="Rolex"
                  className="rounded shadow-lg transition-transform duration-500 hover:scale-110 hover:transform hover:origin-center"
                />
              </Link>
            </div>

            {/* Grid with Swipeable Effect */}
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Audemars Piguet
                </div>
                <Link href="/collections/piguet">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-piguet-mobile.avif"
                    alt="Audemars Piguet"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Patek Philippe
                </div>
                <Link href="/collections/patek">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hero-patek-mobile.avif"
                    alt="Patek Philippe"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <div className="relative text-center w-full rounded shadow-lg">
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                Cartier
              </div>
              <Link href="/collections/cartier">
                <img
                  src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/cartier-hero-mobile.avif"
                  alt="Cartier"
                  className="rounded shadow-lg transition-transform duration-500 hover:scale-110 hover:transform hover:origin-center"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Tag Hauer
                </div>
                <Link href="/collections/tag-heuer">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/th-hero-mobile.avif"
                    alt="Tag Hauer"
                    className="rounded shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded transition-all duration-300 group-hover:shadow-lg group-hover:text-yellow-400 z-10">
                  Hublot
                </div>
                <Link href="/collections/hublot">
                  <img
                    src="https://medusajs-server.fra1.cdn.digitaloceanspaces.com/hublot-hero-mobile.avif"
                    alt="Hublot"
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
