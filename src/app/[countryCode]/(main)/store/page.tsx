import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    q?:string
    sortBy?: SortOptions
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  console.log("Search params:", searchParams); // Debugging

  const { q, sortBy, page } = searchParams

  return (
    <StoreTemplate
      query={q}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
