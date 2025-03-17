import Link from "next/link";
import { getTDMBMovie } from "@/utils/api";
import Carousel from "@/components/Carousel";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SeeMore from "./SeeMore";

export default async function MovieCard() {
  const getUpcomingMovie = await getTDMBMovie(
    "/movie/upcoming?language=en-US&page=1"
  );
  const getPopularMovie = await getTDMBMovie(
    "/movie/popular?language=en-US&page=1"
  );
  const getTopRatedMovie = await getTDMBMovie(
    "/movie/top_rated?language=en-US&page=1"
  );

  return (
    <div className="px-4 py-6">
      <Carousel />

      {/* Upcoming Movies */}
      <div className="flex justify-between items-center mt-4 mb-4">
        <h2 className="text-lg font-semibold">Upcoming</h2>
        <SeeMore categoryType="upcoming" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {getUpcomingMovie.results.slice(0, 10).map((movie, index) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <Card className="shadow-md rounded-xl border-hidden overflow-hidden">
              <CardContent className="p-2">
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
                <p className="text-sm font-medium mt-1 line-clamp-2">
                  {movie.title}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Top Rated Movies */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <h2 className="text-lg font-semibold">Top Rated</h2>
        <SeeMore categoryType="top_rated" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {getTopRatedMovie.results.slice(0, 10).map((movie, index) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <Card className="shadow-md rounded-xl border-hidden overflow-hidden">
              <CardContent className="p-2">
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
                <p className="text-sm font-medium mt-1 line-clamp-2">
                  {movie.title}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Popular Movies */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <h2 className="text-lg font-semibold">Popular</h2>
        <SeeMore categoryType="popular" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {getPopularMovie.results.slice(0, 10).map((movie, index) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <Card className="shadow-md rounded-xl border-hidden overflow-hidden">
              <CardContent className="p-2">
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
                <p className="text-sm font-medium mt-1 line-clamp-2">
                  {movie.title}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
