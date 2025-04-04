"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { HttpTypes } from "@medusajs/types"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

import {
  getAuthHeaders,
  getCacheOptions,
  getCacheTag,
  getCartId,
  removeCartId,
  setCartId,
} from "./cookies"

import { getRegion } from "./regions"

const DEFAULT_COUNTRY_CODE = "ru" // fallback

export async function retrieveCart(cartId?: string) {
  const id = cartId || (await getCartId())
  if (!id) return null

  const headers = { ...(await getAuthHeaders()) }
  const next = { ...(await getCacheOptions("carts")) }

  return await sdk.client
    .fetch<HttpTypes.StoreCartResponse>(`/store/carts/${id}`, {
      method: "GET",
      query: {
        fields:
          "*items, *region, *items.product, *items.variant, *items.thumbnail, *items.metadata, +items.total, *promotions, +shipping_methods.name",
      },
      headers,
      next,
      cache: "force-cache",
    })
    .then(({ cart }) => cart)
    .catch(() => null)
}

export async function getOrSetCart(countryCode: string) {
  const region = DEFAULT_COUNTRY_CODE
  if (!region) throw new Error(`Region not found for country code: ru`)

  let cart = await retrieveCart()
  const headers = { ...(await getAuthHeaders()) }

  if (!cart) {
    const cartResp = await sdk.store.cart.create(
      { region_id: region.id },
      {},
      headers
    )
    cart = cartResp.cart
    await setCartId(cart.id)
    revalidateTag(await getCacheTag("carts"))
  }

  if (cart?.region_id !== region.id) {
    await sdk.store.cart.update(cart.id, { region_id: region.id }, {}, headers)
    revalidateTag(await getCacheTag("carts"))
  }

  return cart
}

export async function updateCart(data: HttpTypes.StoreUpdateCart) {
  const cartId = await getCartId()
  if (!cartId) throw new Error("No existing cart found")

  const headers = { ...(await getAuthHeaders()) }

  return sdk.store.cart
    .update(cartId, data, {}, headers)
    .then(async ({ cart }) => {
      revalidateTag(await getCacheTag("carts"))
      return cart
    })
    .catch(medusaError)
}

export async function addToCart({
                                  variantId,
                                  quantity,
                                  countryCode,
                                }: {
  variantId: string
  quantity: number
  countryCode: string
}) {
  if (!variantId) throw new Error("Missing variant ID")

  const cart = await getOrSetCart("ru")
  if (!cart) throw new Error("Error retrieving or creating cart")

  const headers = { ...(await getAuthHeaders()) }

  await sdk.store.cart
    .createLineItem(
      cart.id,
      { variant_id: variantId, quantity },
      {},
      headers
    )
    .then(async () => revalidateTag(await getCacheTag("carts")))
    .catch(medusaError)
}

export async function updateLineItem({
                                       lineId,
                                       quantity,
                                     }: {
  lineId: string
  quantity: number
}) {
  const cartId = await getCartId()
  if (!cartId) throw new Error("Missing cart ID")

  const headers = { ...(await getAuthHeaders()) }

  await sdk.store.cart
    .updateLineItem(cartId, lineId, { quantity }, {}, headers)
    .then(async () => revalidateTag(await getCacheTag("carts")))
    .catch(medusaError)
}

export async function deleteLineItem(lineId: string) {
  const cartId = await getCartId()
  if (!cartId) throw new Error("Missing cart ID")

  const headers = { ...(await getAuthHeaders()) }

  await sdk.store.cart
    .deleteLineItem(cartId, lineId, headers)
    .then(async () => revalidateTag(await getCacheTag("carts")))
    .catch(medusaError)
}

export async function setShippingMethod({
                                          cartId,
                                          shippingMethodId,
                                        }: {
  cartId: string
  shippingMethodId: string
}) {
  const headers = { ...(await getAuthHeaders()) }

  return sdk.store.cart
    .addShippingMethod(cartId, { option_id: shippingMethodId }, {}, headers)
    .then(async () => revalidateTag(await getCacheTag("carts")))
    .catch(medusaError)
}

export async function initiatePaymentSession(
  cart: HttpTypes.StoreCart,
  data: {
    provider_id: string
    context?: Record<string, unknown>
  }
) {
  const headers = { ...(await getAuthHeaders()) }

  return sdk.store.payment
    .initiatePaymentSession(cart, data, {}, headers)
    .then(async (resp) => {
      revalidateTag(await getCacheTag("carts"))
      return resp
    })
    .catch(medusaError)
}

export async function applyPromotions(codes: string[]) {
  const cartId = await getCartId()
  if (!cartId) throw new Error("No cart found")

  const headers = { ...(await getAuthHeaders()) }

  return sdk.store.cart
    .update(cartId, { promo_codes: codes }, {}, headers)
    .then(async () => revalidateTag(await getCacheTag("carts")))
    .catch(medusaError)
}

export async function setAddresses(currentState: unknown, formData: FormData) {
  try {
    const cartId = await getCartId()
    if (!cartId) throw new Error("No cart ID found")

    const data = {
      shipping_address: {
        first_name: formData.get("shipping_address.first_name"),
        last_name: formData.get("shipping_address.last_name"),
        address_1: formData.get("shipping_address.address_1"),
        address_2: "",
        company: formData.get("shipping_address.company"),
        postal_code: formData.get("shipping_address.postal_code"),
        city: formData.get("shipping_address.city"),
        country_code: formData.get("shipping_address.country_code"),
        province: formData.get("shipping_address.province"),
        phone: formData.get("shipping_address.phone"),
      },
      email: formData.get("email"),
    } as any

    if (formData.get("same_as_billing") === "on") {
      data.billing_address = data.shipping_address
    } else {
      data.billing_address = {
        first_name: formData.get("billing_address.first_name"),
        last_name: formData.get("billing_address.last_name"),
        address_1: formData.get("billing_address.address_1"),
        address_2: "",
        company: formData.get("billing_address.company"),
        postal_code: formData.get("billing_address.postal_code"),
        city: formData.get("billing_address.city"),
        country_code: formData.get("billing_address.country_code"),
        province: formData.get("billing_address.province"),
        phone: formData.get("billing_address.phone"),
      }
    }

    await updateCart(data)
  } catch (e: any) {
    return e.message
  }

  // ✅ Redirect without countryCode
  redirect(`/checkout?step=delivery`)
}

export async function placeOrder(cartId?: string) {
  const id = cartId || (await getCartId())
  if (!id) throw new Error("No cart ID found")

  const headers = { ...(await getAuthHeaders()) }

  const cartRes = await sdk.store.cart
    .complete(id, {}, headers)
    .then(async (res) => {
      revalidateTag(await getCacheTag("carts"))
      return res
    })
    .catch(medusaError)

  if (cartRes?.type === "order") {
    removeCartId()

    // ✅ Clean redirect
    redirect(`/order/${cartRes?.order.id}/confirmed`)
  }

  return cartRes.cart
}

export async function updateRegion(countryCode: string, currentPath: string) {
  const cartId = await getCartId()
  const region = await getRegion(countryCode)

  if (!region) throw new Error(`Region not found: ${countryCode}`)

  if (cartId) {
    await updateCart({ region_id: region.id })
    revalidateTag(await getCacheTag("carts"))
  }

  revalidateTag(await getCacheTag("regions"))
  revalidateTag(await getCacheTag("products"))

  // ✅ Redirect without countryCode
  redirect(currentPath)
}

export async function listCartOptions() {
  const cartId = await getCartId()
  const headers = { ...(await getAuthHeaders()) }
  const next = { ...(await getCacheOptions("shippingOptions")) }

  return await sdk.client.fetch<{
    shipping_options: HttpTypes.StoreCartShippingOption[]
  }>("/store/shipping-options", {
    query: { cart_id: cartId },
    next,
    headers,
    cache: "force-cache",
  })
}
