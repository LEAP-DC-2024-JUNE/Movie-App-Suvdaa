"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getTDMBMovie } from "@/utils/api";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Pagination from "@/components/Pagination";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const Movies: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryType = searchParams.get("type") || "upcoming";
  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTDMBMovie(
        `/movie/${categoryType}?language=en-US&page=${page}`
      );
      setMovies(data.results.slice(0, limit));
      setTotalPages(data.total_pages);
    };

    fetchMovies();
  }, [categoryType, page]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold capitalize">
        {categoryType
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        Movies
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {movies.map((movie) => (
          <Card key={movie.id} className="shadow-md rounded-xl border-hidden">
            <CardContent className="p-1">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <Star fill="#FDE047" strokeWidth={0} size={14} />
                <p className="ml-1 font-medium">
                  {movie.vote_average?.toFixed(1)}
                </p>
                <span className="text-gray-500">/10</span>
              </div>
              <p className="text-sm font-medium mt-1">{movie.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Movies;
