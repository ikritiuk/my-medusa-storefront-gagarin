"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const videoBottom = videoSection.offsetTop + videoSection.offsetHeight;
        setIsSticky(window.scrollY > videoBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-ui-bg-subtle">

      {/* Mobile Video Section */}
      <div
        id="video-section"
        className="sm:md:block lg:hidden w-full border-b border-ui-border-base relative overflow-hidden"
      >
        <div className="relative w-full overflow-hidden">
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
        </div>
      </div>

      {/* Sticky Title Section */}
      <div
        className={`w-full text-center py-4 px-4 bg-white shadow-md transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 w-full z-50" : ""
          }`}
      >
        <h2 className="text-lg font-semibold text-center max-w-[90%]">
          Категории
        </h2>
      </div>

      {/* Category Section */}
      <div className="flex flex-col items-center mb-6 gap-4 mt-6">
        <div className="flex flex-wrap justify-center gap-6">
          {/* DJI Drones */}
          <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px]">
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

          {/* DJI Accessories & Cameras */}
          <div className="flex items-center justify-between w-full gap-4">
            {/* DJI Glasses */}
            <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
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

            {/* DJI Cameras */}
            <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
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

          {/* DJI Microphones */}
          <div className="relative w-full text-center overflow-hidden rounded shadow-lg h-[250px] sm:h-[280px]">
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

          {/* DJI Stabilizers & Parts */}
          <div className="flex items-center justify-between w-full gap-4">
            {/* DJI Stabilizers */}
            <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
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

            {/* DJI Batteries & Parts */}
            <div className="relative w-1/2 text-center overflow-hidden rounded shadow-lg">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded z-10">
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
  );
};

export default Hero;
