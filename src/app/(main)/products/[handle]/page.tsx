import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"

type Props = {
  params: Promise<{ handle: string }>
}

export async function generateStaticParams() {
  try {
    const products = await listProducts({
      countryCode: "ru", // or your default region code
      queryParams: { fields: "handle" },
    }).then(({ response }) => response.products)

    return products
      .filter((product) => product?.handle)
      .map((product) => ({
        handle: product.handle,
      }))
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
        }.`
    )
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params

  const product = await listProducts({
    countryCode: "ru", // default region code
    queryParams: { handle },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Gagarin Shop`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Gagarin Shop`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params

  const region = await getRegion("ru") // hardcode or dynamically fetch default
  if (!region) {
    notFound()
  }

  const product = await listProducts({
    countryCode: "ru",
    queryParams: { handle: params.handle },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return (
    <ProductTemplate
      product={product}
      region={region}
    />
  )
}
