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
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav
          className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular relative">

          <div>
            <div className="h-full">
              <SideMenu regions={regions}/>
            </div>
          </div>

          <div className="flex items-center justify-center py-4 mr-4 md:mr-10">
            <a href="/">
              <img className="h-24 w-auto md:h-[180px] lg:h-[220px]" src="/logo.svg" alt="Logo" />
            </a>
          </div>

          {/* Centered Search on desktop */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <Search />
          </div>

          {/* Search stays inline on mobile */}
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
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Корзина (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
