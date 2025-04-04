import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Search from "@modules/home/components/search"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import * as React from "react"

const DEFAULT_COUNTRY_CODE = "ru" // fallback

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home() {
  const region = await getRegion(DEFAULT_COUNTRY_CODE)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-8">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
