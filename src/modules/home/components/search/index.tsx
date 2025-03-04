"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";
import Input from "./ui/index";
import { sdk } from "@lib/config"; // Ensure you have SDK access

const MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const { products } = await sdk.store.product.list({ q: searchQuery });
        setSuggestions(products.slice(0, 5)); // Limit suggestions
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
      setLoading(false);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSearch = (e?: KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/store?q=${encodeURIComponent(searchQuery.trim())}`);
      setSuggestions([]); // Clear suggestions after search
    }
  };

  const handleSuggestionClick = (slug: string) => {
    router.push(`/products/${slug}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full xl:w-[400px]">
      <Input
        placeholder="Поиск товаров..."
        icon={<IconSearch color="lightgray" size={16} />}
        className="text-sm w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full bg-white shadow-lg border rounded-md mt-2 z-10">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleSuggestionClick(product.handle)}
            >
              <img src={product.thumbnail} alt={product.title} className="w-10 h-10 object-cover mr-2" />
              <span className="text-sm">{product.title}</span>
            </li>
          ))}
        </ul>
      )}

      {loading && <p className="text-sm text-gray-400 absolute mt-2">Поиск...</p>}
    </div>
  );
};

export default Search;
