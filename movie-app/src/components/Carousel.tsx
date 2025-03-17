"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getTDMBMovie } from "@/utils/api";
import { v4 as uuidv4 } from "uuid";
import { Star } from "lucide-react";
import { Trailer } from "@/components/WatchTrailer";

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTDMBMovie(
          "/movie/now_playing?language=en-US&page=1"
        );
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = () => {
      emblaApi.scrollNext();
    };
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden h-148 w-96 object-contain " ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={uuidv4()} className="min-w-full">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                // className="w-full h-[500px] md:h-[400px] sm:h-[250px] object-cover rounded-xl"
              />
            </div>

            <div>
              <div className=" bottom-5 left-5 bg-white/90 p-4 rounded-xl w-[90%] sm:w-[95%]">
                <div>Now Playing</div>

                <h2 className="text-lg sm:text-md font-bold">{movie.title}</h2>
                <div className="flex items-center mt-1">
                  <Star fill="#FDE047" strokeWidth={0} size={18} />
                  <p className="ml-1 text-gray-800 font-medium">
                    {movie.vote_average?.toFixed(1)}
                  </p>
                  <span className="text-gray-500 text-sm">/10</span>
                </div>
                <p className="text-sm sm:text-xs text-gray-700 mt-2 line-clamp-2">
                  {movie.overview}
                </p>
                <Trailer movieId={movie.id} title={movie.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
