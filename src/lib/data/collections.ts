"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"
import { getRegion } from "./regions"

const DEFAULT_COUNTRY_CODE = "ru"

/**
 * Retrieve a collection by its ID
 */
export const retrieveCollection = async (id: string) => {
  const next = {
    ...(await getCacheOptions("collections")),
  }

  return sdk.client
    .fetch<{ collection: HttpTypes.StoreCollection }>(
      `/store/collections/${id}`,
      {
        next,
        cache: "force-cache",
      }
    )
    .then(({ collection }) => collection)
}

/**
 * List all collections (optionally pass query params like fields, offset, etc.)
 */
export const listCollections = async (
  queryParams: Record<string, string> = {}
): Promise<{ collections: HttpTypes.StoreCollection[]; count: number }> => {
  const next = {
    ...(await getCacheOptions("collections")),
  }

  queryParams.limit = queryParams.limit || "100"
  queryParams.offset = queryParams.offset || "0"

  return sdk.client
    .fetch<{ collections: HttpTypes.StoreCollection[]; count: number }>(
      "/store/collections",
      {
        query: queryParams,
        next,
        cache: "force-cache",
      }
    )
    .then(({ collections }) => ({
      collections,
      count: collections.length,
    }))
}

/**
 * Get a collection by handle with optional region support for region-specific pricing
 */
export const getCollectionByHandle = async (
  handle: string,
  countryCode: string = DEFAULT_COUNTRY_CODE
): Promise<HttpTypes.StoreCollection> => {
  const next = {
    ...(await getCacheOptions("collections")),
  }

  const region = await getRegion(countryCode)

  const query: Record<string, string> = {
    handle,
    fields: "*products",
  }

  if (region?.id) {
    query.region_id = region.id
  }

  return sdk.client
    .fetch<HttpTypes.StoreCollectionListResponse>(`/store/collections`, {
      query,
      next,
      cache: "force-cache",
    })
    .then(({ collections }) => collections[0])
}
