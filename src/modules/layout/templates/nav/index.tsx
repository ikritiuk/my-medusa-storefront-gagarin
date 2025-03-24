import { default as React, Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Search from "@modules/home/components/search"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <>
      <div className="sticky top-0 inset-x-0 z-50 group">
        <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
          <nav
            className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular relative"
          >
            <div>
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>

            {/* Logo hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center justify-center py-4 mr-4 md:mr-10">
              <a href="/">
                <img
                  className="h-24 w-auto md:h-[180px] lg:h-[220px]"
                  src="/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Centered Search on desktop */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <Search />
            </div>

            {/* Search inline on mobile */}
            <div className="flex md:hidden">
              <Search />
            </div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Аккаунт
                </LocalizedClientLink>
              </div>

              {/* Cart button visible only on tablet/desktop */}
              <div className="hidden md:flex">
                <Suspense
                  fallback={
                    <div className="hidden md:flex">
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base flex gap-2"
                        href="/cart"
                        data-testid="nav-cart-link"
                      >
                        Корзина (0)
                      </LocalizedClientLink>
                    </div>
                  }
                >
                  <div className="hidden md:flex">
                    <CartButton />
                  </div>
                </Suspense>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden">
        <a
          href="/"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 4l9 5.75M4.5 10.5v9h15v-9"
            />
          </svg>
          Главная
        </a>

        <a
          href="/account"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
              v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          Профиль
        </a>

        <a
          href="/cart"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.3a1 1 0 001 1.2h12.6a1 1 0 001-1.2L17 13M7 13l-4-8m4 8l4-8"
            />
          </svg>
          Корзина
        </a>
      </div>
    </>
  )
}
