import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    q?: string
    sortBy?: SortOptions
    page?: string
  }>
}

export default async function StorePage(props: Params) {
  const searchParams = await props.searchParams
  const { q, sortBy, page } = searchParams

  const DEFAULT_COUNTRY_CODE = "ru" // or fetch from cookies in future

  return (
    <StoreTemplate
      query={q}
      sortBy={sortBy}
      page={page}
      countryCode={DEFAULT_COUNTRY_CODE}
    />
  )
}
