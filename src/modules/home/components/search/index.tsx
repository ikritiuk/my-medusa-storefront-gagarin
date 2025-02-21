"use client";

import { IconSearch } from "@tabler/icons-react";
import Input from "./ui/index";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/store?q=${encodeURIComponent(searchQuery.trim())}`);
    }
    setSearchQuery("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <Input
      placeholder="Search for products"
      minWidth="xl:w-[400px]"
      icon={<IconSearch color="lightgray" size={16} />}
      className="text-sm"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default Search;