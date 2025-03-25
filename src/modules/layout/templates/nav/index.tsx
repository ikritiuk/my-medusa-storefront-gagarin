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
              <Search/>
            </div>

            <div className="flex md:hidden w-full justify-center px-4">
              <div className="w-full max-w-md">
                <Search/>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
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
                    <CartButton/>
                  </div>
                </Suspense>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* ✅ Mobile Bottom Bar with updated home & account icons */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden"
      >
        <a
          href="/"
          className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            className="w-6 h-6 mb-1"
          >
            <path
              fill="#D3D4DD"
              d="m19.463 8.858-.002-.002L11.302.54A1.829 1.829 0 0 0 10 0a1.83 1.83 0 0 0-1.302.54L.543 8.851l-.008.008a1.843 1.843 0 0 0 .003 2.6 1.83 1.83 0 0 0 1.279.54h.325v5.845c0 1.188.967 2.155 2.155 2.155H7.49a.586.586 0 0 0 .586-.586v-4.707c0-.542.442-.983.984-.983h1.883c.542 0 .983.44.983.983v4.707c0 .324.262.586.586.586h3.192a2.157 2.157 0 0 0 2.155-2.155V12h.302a1.83 1.83 0 0 0 1.302-.54 1.844 1.844 0 0 0 0-2.602Z"
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
            width="20"
            height="20"
            fill="none"
            className="w-6 h-6 mb-1"
          >
            <path
              fill="#C8C8D1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.759 4.789c0 2.77-2.195 4.918-4.753 4.918-2.558 0-4.752-2.148-4.752-4.895C5.241 2.101 7.461 0 10.006 0a4.763 4.763 0 0 1 4.753 4.789ZM0 18.498C0 19.484.677 20 2.57 20h14.86c1.893 0 2.57-.516 2.57-1.502 0-2.864-3.85-6.808-9.994-6.808C3.85 11.69 0 15.634 0 18.498Z"
            />
          </svg>
          Профиль
        </a>

        <Suspense
          fallback={
            <a
              href="/cart"
              className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 16"
                fill="none"
                className="w-8 h-8 mb-1"
              >
                <path
                  d="M2.925.488a.833.833 0 0 0-1.517.691l4.295 9.416v.001c.005.008.023.05.046.09a.9.9 0 0 0 .979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256 1.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01 0-.06-.004-.11a.901.901 0 0 0-.488-.73.9.9 0 0 0-.447-.098H4.147L2.925.487ZM11.833 12a1.333 1.333 0 0 0 0 2.667h.007a1.333 1.333 0 0 0 0-2.667h-.007ZM3.167 13.334c0-.737.597-1.334 1.333-1.334h.007a1.333 1.333 0 0 1 0 2.667H4.5a1.333 1.333 0 0 1-1.333-1.333Z"
                  fill="#A9A8B0"
                />
              </svg>
              Корзина (0)
            </a>
          }
        >
          <a
            href="/cart"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 16"
              fill="none"
              className="w-8 h-8 mb-1"
            >
              <path
                d="M2.925.488a.833.833 0 0 0-1.517.691l4.295 9.416v.001c.005.008.023.05.046.09a.9.9 0 0 0 .979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256 1.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01 0-.06-.004-.11a.901.901 0 0 0-.488-.73.9.9 0 0 0-.447-.098H4.147L2.925.487ZM11.833 12a1.333 1.333 0 0 0 0 2.667h.007a1.333 1.333 0 0 0 0-2.667h-.007ZM3.167 13.334c0-.737.597-1.334 1.333-1.334h.007a1.333 1.333 0 0 1 0 2.667H4.5a1.333 1.333 0 0 1-1.333-1.333Z"
                fill="#A9A8B0"
              />
            </svg>
            <CartButton />
          </a>
        </Suspense>
      </div>
    </>
  )
}
