("use client");
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getTDMBMovie } from "@/utils/api";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

const Movies = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryType = searchParams.get("type") || "upcoming";
  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

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

  const handlePageChange = (newPage: number) => {
    router.push(`/movies?type=${categoryType}&page=${newPage}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-bold capitalize mb-4 text-white">
        {categoryType} Movies
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <Card className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <CardContent className="p-0">
              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-52 object-cover"
              />
              {/* Movie Info */}
              <div className="p-2 bg-gray-900 text-white">
                <p className="text-sm font-medium truncate">{movie.title}</p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <Star fill="#FDE047" strokeWidth={0} size={14} />
                  <p className="ml-1">{movie.vote_average?.toFixed(1)}</p>
                  <span className="text-gray-500">/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
          className="px-6 py-2 text-white bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800"
        >
          Previous
        </Button>

        <span className="text-white text-lg">
          {page} / {totalPages}
        </span>

        <Button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
          className="px-6 py-2 text-white bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Movies;

// ("use client");
// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { getTDMBMovie } from "@/utils/api";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import Link from "next/link";

// const Movies = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const categoryType = searchParams.get("type") || "upcoming";
//   const page = Number(searchParams.get("page")) || 1;
//   const limit = 10;

//   const [movies, setMovies] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await getTDMBMovie(
//         `/movie/${categoryType}?language=en-US&page=${page}`
//       );
//       setMovies(data.results.slice(0, limit));
//       setTotalPages(data.total_pages);
//     };

//     fetchMovies();
//   }, [categoryType, page]);

//   const handlePageChange = (newPage: number) => {
//     router.push(`/movies?type=${categoryType}&page=${newPage}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold capitalize">{categoryType} Movies</h1>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {movies.map((movie: any) => (
//           <Link key={movie.id} href={`/movies/${movie.id}`}>
//             <Card key={movie.id} className="shadow-md rounded-xl">
//               <CardContent className="p-2">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                   alt={movie.title}
//                   className="w-full h-44 object-cover rounded-xl"
//                 />
//                 <div className="flex items-center text-sm text-gray-600 mt-2">
//                   <Star fill="#FDE047" strokeWidth={0} size={14} />
//                   <p className="ml-1 font-medium">
//                     {movie.vote_average?.toFixed(1)}
//                   </p>
//                   <span className="text-gray-500">/10</span>
//                 </div>
//                 <p className="text-sm font-medium mt-1">{movie.title}</p>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//       //pagination
//       <div className="flex justify-center mt-6 space-x-4">
//         <Button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
//           Previous
//         </Button>

//         <span className="text-gray-800">
//           {page} / {totalPages}
//         </span>

//         <Button
//           disabled={page >= totalPages}
//           onClick={() => handlePageChange(page + 1)}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Movies;
