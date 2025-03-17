"use client";

import { Button } from "./ui/button";
import { X, Search, Loader2 } from "lucide-react";
import Genre from "./Genre";
import { getTDMBMovie } from "@/utils/api";

import { useState, useEffect } from "react";
import useSWR from "swr";
import SearchCard from "./SearchCard";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  onClose: () => void;
}

const SearchInput = ({ onClose }: SearchInputProps) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Only fetch movies if there's a search query
  const { data, error, isLoading } = useSWR(
    searchInput.trim()
      ? `/search/movie?query=${searchInput}&language=en-US`
      : null,
    getTDMBMovie
  );

  // Auto-close dropdown when search is empty
  useEffect(() => {
    setOpen(searchInput.length > 0);
  }, [searchInput]);

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    router.push(`/search?query=${searchInput}`);
    setOpen(false);
    setSearchInput(""); // Clear input after searching
  };

  return (
    <div className="relative flex gap-4 items-center h-auto">
      <Genre />
      <div className="flex items-center relative">
        <Search
          size={16}
          strokeWidth={2}
          color="#71717A"
          className="absolute left-3 z-10"
        />
        <Input
          className="w-[240px] h-[40px] pl-10 pr-4"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* Dropdown Results */}
      {open && (
        <div className="absolute z-50 top-12 w-[362px] rounded-md border bg-popover shadow-md animate-in fade-in-80">
          <div className="p-2">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin" />
              </div>
            ) : data?.results?.length > 0 ? (
              data.results
                .slice(0, 5)
                .map((movie: Movie) => (
                  <SearchCard
                    key={movie.id}
                    movie={movie}
                    onSelect={() => setOpen(false)}
                  />
                ))
            ) : (
              <div className="p-2 text-center">No results found</div>
            )}
          </div>
          <Button
            className="pl-4 pb-4 text-zinc-800 cursor-pointer"
            onClick={handleSearch}
            variant="ghost"
          >
            See all results for "{searchInput}"
          </Button>
        </div>
      )}

      <Button variant="ghost" size="icon" onClick={onClose}>
        <X />
      </Button>
    </div>
  );
};

export default SearchInput;
