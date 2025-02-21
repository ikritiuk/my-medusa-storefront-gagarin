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
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.searchParams;
  const searchParams = await props.searchParams;
  console.log("Search params:", searchParams); // Debugging

  const { sortBy, page } = searchParams

  return (
    <StoreTemplate
      q={q}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
