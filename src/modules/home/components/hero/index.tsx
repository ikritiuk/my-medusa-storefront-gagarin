"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const videoSectionRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!videoSectionRef.current || !categoriesRef.current) return;

      // Detect a small scroll and immediately jump to categories
      const threshold = 50; // Small scroll threshold
      if (window.scrollY > threshold) {
        categoriesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-ui-bg-subtle">
      {/* Fullscreen Video Section */}
      <div
        id="video-section"
        ref={videoSectionRef}
        className="sm:md:block lg:hidden w-full h-screen border-b border-ui-border-base relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white px-4">
            Откройте мир <span className="text-[#FFC107]">DJI</span>! 🚀
          </h1>
        </div>
        <Link href="/collections/dji-drones" className="w-full">
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
        </Link>
      </div>

      {/* Категории Section (Snap Scroll Target) */}
      <div
        ref={categoriesRef}
        className="w-full text-center py-4 px-4 bg-white shadow-md"
      >
        <h2 className="text-lg font-semibold">Категории</h2>
      </div>

      {/* Category Images Section */}
      <div className="flex flex-col items-center mb-6 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
