"use client";

import { useState, useEffect, useCallback } from "react";
import { useMedusa } from "medusa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import debounce from "lodash.debounce";

const queryClient = new QueryClient();

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { client } = useMedusa();

  const fetchProducts = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { products } = await client.products.list({ q: searchTerm });
      setResults(products);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(debounce(fetchProducts, 300), []);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search for products..."
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && <p className="text-gray-500 text-sm mt-2">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {results.length > 0 && (
        <ul className="absolute bg-white shadow-lg mt-2 w-full rounded-lg border max-h-60 overflow-y-auto">
          {results.map((product) => (
            <li key={product.id} className="p-3 hover:bg-gray-100 cursor-pointer">
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SearchBar = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchComponent />
    </QueryClientProvider>
  );
};

export default SearchBar;
