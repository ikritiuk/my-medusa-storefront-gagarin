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
            <div className="hidden md:block h-full">
              <SideMenu regions={regions} />
            </div>

            <div className="hidden md:flex items-center justify-center py-4 mr-4 md:mr-10">
              <a href="/">
                <img
                  className="h-24 w-auto md:h-[180px] lg:h-[220px]"
                  src="/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <Search />
            </div>

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

      {/* ✅ Mobile Bottom Bar with your custom SVGs */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden">
        <a
          href="/"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%3E%3Cpath%20fill%3D%22%23D3D4DD%22%20d%3D%22m19.463%208.858-.002-.002L11.302.54A1.829%201.829%200%200%200%2010%200a1.83%201.83%200%200%200-1.302.54L.543%208.851l-.008.008a1.843%201.843%200%200%200%20.003%202.6%201.83%201.83%200%200%200%201.279.54h.325v5.845c0%201.188.967%202.155%202.155%202.155H7.49a.586.586%200%200%200%20.586-.586v-4.707c0-.542.442-.983.984-.983h1.883c.542%200%20.983.44.983.983v4.707c0%20.324.262.586.586.586h3.192a2.157%202.157%200%200%200%202.155-2.155V12h.302a1.83%201.83%200%200%200%201.302-.54%201.844%201.844%200%200%200%200-2.602Z%22%2F%3E%3C%2Fsvg%3E"
            alt="Home"
            className="h-6 w-6 mb-1"
          />
          Главная
        </a>

        <a
          href="/account"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%3E%3Cpath%20fill%3D%22%23C8C8D1%22%20fill-rule%3D%22evenodd%22%20d%3D%22M14.759%204.789c0%202.77-2.195%204.918-4.753%204.918-2.558%200-4.752-2.148-4.752-4.895C5.241%202.101%207.461%200%2010.006%200a4.763%204.763%200%200%201%204.753%204.789ZM0%2018.498C0%2019.484.677%2020%202.57%2020h14.86c1.893%200%202.57-.516%202.57-1.502%200-2.864-3.85-6.808-9.994-6.808C3.85%2011.69%200%2015.634%200%2018.498Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E"
            alt="Account"
            className="h-6 w-6 mb-1"
          />
          Профиль
        </a>

        <Suspense
          fallback={
            <a
              href="/cart"
              className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
            >
              <img
                src="data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.925.488a.833.833%200%200%200-1.517.691l4.295%209.416v.001c.005.008.023.05.046.09a.9.9%200%200%200%20.979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256%201.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01%200-.06-.004-.11a.901.901%200%200%200-.488-.73.9.9%200%200%200-.447-.098H4.147L2.925.487ZM11.833%2012a1.333%201.333%200%200%200%200%202.667h.007a1.333%201.333%200%200%200%200-2.667h-.007ZM3.167%2013.334c0-.737.597-1.334%201.333-1.334h.007a1.333%201.333%200%200%201%200%202.667H4.5a1.333%201.333%200%200%201-1.333-1.333Z%22%20fill%3D%22%23A9A8B0%22%2F%3E%3C%2Fsvg%3E"
                alt="Cart"
                className="h-6 w-6 mb-1"
              />
              Корзина
            </a>
          }
        >
          <a
            href="/cart"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
          >
            <CartButton />
          </a>
        </Suspense>
      </div>
    </>
  )
}
