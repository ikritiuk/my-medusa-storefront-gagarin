import { sdk } from "@lib/config"
import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
  order?: string;
};

export default async function PaginatedProducts({
                                                  query,
                                                  sortBy,
                                                  page,
                                                  collectionId,
                                                  categoryId,
                                                  productsIds,
                                                  countryCode,

                                                }: {
  query?: string;
  sortBy?: SortOptions;
  page: number;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  countryCode: string;

}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  let products
  let count
  console.log("query:", query);

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at"
  }

  const {
    response: { products: regularProducts, count: totalCount },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  if (query) {

    // Filter existing regularProducts based on query
    const lowerCaseQuery = query.toLowerCase();

    products = regularProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      (product.description && product.description.toLowerCase().includes(lowerCaseQuery))
    );

    count = products.length;
  } else {
    // If no search query, use the regular product listing logic


    products = regularProducts
    count = totalCount
  }

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {products.length === 0 ? (
          <div className=" col-span-4 text-center py-20">
            <p className="font-medium text-gray-500 pb-4">
              No products found for this search
            </p>
            <LocalizedClientLink href="/store" className="text-blue-500">
              Back to store
            </LocalizedClientLink>
          </div>
        ) : (
          products.map((p) => {
            console.log("product: ", p); // Debugging
            console.log("region: ", region); // Debugging

            return (
              <li key={p.id}>
                <ProductPreview product={p} region={region}/>
              </li>
            )
          })
        )}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
