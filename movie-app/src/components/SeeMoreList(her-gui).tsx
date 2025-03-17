// "use client";
// import { useState, useEffect } from "react";
// import { getTDMBMovie } from "@/utils/api";
// import Carousel from "@/components/Carousel";
// import { Star } from "lucide-react";
// import { Button } from "./ui/button";
// import Pagination from "./Pagination";
// import { Card, CardContent } from "@/components/ui/card";
// import SeeMore from "./SeeMore";

// export default function MovieCard() {
//   const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
//   const [popularMovies, setPopularMovies] = useState<any[]>([]);
//   const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
//   const [visibleMovies, setVisibleMovies] = useState(10);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const upcomingData = await getTDMBMovie(
//           "/movie/upcoming?language=en-US&page=1"
//         );
//         const popularData = await getTDMBMovie(
//           "/movie/popular?language=en-US&page=1"
//         );
//         const topRatedData = await getTDMBMovie(
//           "/movie/top_rated?language=en-US&page=1"
//         );

//         setUpcomingMovies(upcomingData.results);
//         setPopularMovies(popularData.results);
//         setTopRatedMovies(topRatedData.results);
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleSeeMore = () => {
//     setVisibleMovies(visibleMovies + 10); // Increase the number of visible movies
//   };

//   return (
//     <div className="px-4 py-6">
//       <Carousel />

//       <div className="flex justify-between items-center mt-6 mb-4">
//         <h2 className="text-lg font-semibold">Upcoming</h2>
//         <SeeMore onClick={handleSeeMore} />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {upcomingMovies.slice(0, visibleMovies).map((movie) => (
//           <Card
//             key={movie.id}
//             className="shadow-md rounded-xl border-hidden overflow-hidden"
//           >
//             <CardContent className="p-2">
//               <img
//                 src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-44 object-cover rounded-xl"
//               />
//               <div className="flex items-center text-sm text-gray-600 mt-2">
//                 <Star fill="#FDE047" strokeWidth={0} size={14} />
//                 <p className="ml-1 font-medium">
//                   {movie.vote_average?.toFixed(1)}
//                 </p>
//                 <span className="text-gray-500">/10</span>
//               </div>
//               <p className="text-sm font-medium mt-1 line-clamp-2">
//                 {movie.title}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-6 mb-4">
//         <h2 className="text-lg font-semibold">Top Rated</h2>
//         <Button
//           variant="ghost"
//           className="text-sm text-gray-600 hover:text-black"
//         >
//           See more →
//         </Button>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {topRatedMovies.slice(0, visibleMovies).map((movie) => (
//           <Card
//             key={movie.id}
//             className="shadow-md rounded-xl border-hidden overflow-hidden"
//           >
//             <CardContent className="p-2">
//               <img
//                 src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-44 object-cover rounded-xl"
//               />
//               <div className="flex items-center text-sm text-gray-600 mt-2">
//                 <Star fill="#FDE047" strokeWidth={0} size={14} />
//                 <p className="ml-1 font-medium">
//                   {movie.vote_average?.toFixed(1)}
//                 </p>
//                 <span className="text-gray-500">/10</span>
//               </div>
//               <p className="text-sm font-medium mt-1 line-clamp-2">
//                 {movie.title}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-6 mb-4">
//         <h2 className="text-lg font-semibold">Popular</h2>
//         <Button
//           variant="ghost"
//           className="text-sm text-gray-600 hover:text-black"
//         >
//           See more →
//         </Button>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {popularMovies.slice(0, visibleMovies).map((movie) => (
//           <Card
//             key={movie.id}
//             className="shadow-md rounded-xl border-hidden overflow-hidden"
//           >
//             <CardContent className="p-2">
//               <img
//                 src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-44 object-cover rounded-xl"
//               />
//               <div className="flex items-center text-sm text-gray-600 mt-2">
//                 <Star fill="#FDE047" strokeWidth={0} size={14} />
//                 <p className="ml-1 font-medium">
//                   {movie.vote_average?.toFixed(1)}
//                 </p>
//                 <span className="text-gray-500">/10</span>
//               </div>
//               <p className="text-sm font-medium mt-1 line-clamp-2">
//                 {movie.title}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Pagination />
//     </div>
//   );
// }
