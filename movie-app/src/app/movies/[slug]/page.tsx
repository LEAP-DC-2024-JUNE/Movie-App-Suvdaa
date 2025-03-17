import { Trailer } from "@/components/PlayTrailer";
import { getTDMBMovie } from "@/utils/api";

import SeeMore from "@/components/SeeMore";

interface MoviePageProps {
  params: { slug: string };
}

export default async function MovieDetails({ params }: MoviePageProps) {
  const { slug } = params;
  const movie = await getTDMBMovie(`/movie/${slug}?language=en-US`);
  const credits = await getTDMBMovie(`/movie/${slug}/credits?language=en-US`);
  const similarMovie = await getTDMBMovie(
    `/movie/${slug}/similar?language=en-US&page=1`
  );

  if (!movie || !credits || !similarMovie) {
    return <p className="text-center mt-10 text-gray-500">Movie not found.</p>;
  }

  const director =
    credits.crew.find((person: any) => person.job === "Director")?.name ||
    "Unknown";
  const writers = credits.crew
    .filter((person: any) => person.job === "Writer")
    .map((writer: any) => writer.name);
  const stars = credits.cast.slice(0, 3).map((actor: any) => actor.name);

  return (
    <div className="relative w-full min-h-screen">
      {/* Movie Details Container */}
      <div className="relative max-w-4xl mx-auto p-6 md:p-10 shadow-lg rounded-lg">
        <div>
          <h3 className="px-2">{movie.title}</h3>
          <div className="flex gap-20 px-2 text-sm">
            <p className=" mt-2">
              {movie.release_date} • {movie.runtime} mins
            </p>
            <p>
              ⭐ {movie.vote_average?.toFixed(1)} ({movie.vote_count})
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Movie Poster */}
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className=" w-full h-[240px] md:w-1/3 rounded-lg shadow-md read-only:"
            />
          </div>
          <div className="absolute mt-[180px]">
            <Trailer movieId={movie.id} title={movie.title} />
          </div>
        </div>
        {/* //jijig img tei detail */}
        <div className=" flex">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            className=" mt-4 w-[100px] h-[150px] md:w-1/3 rounded-lg shadow-md read-only:"
          />
          {/* Genres */}
          <div className="flex flex-wrap gap-2 mt-3 p-4 ">
            {movie.genres?.map((genre: any) => (
              <button key={genre.id} className=" text-sm px-2 py-1 ">
                {genre.name}
              </button>
            ))}
            <p className="mt-4 ">{movie.overview}</p>
          </div>
        </div>
        <div className="mt-4  ">
          <div className="flex border-b-[2px] border-gray-100 ">
            <h2 className="font-semibold">Director</h2>
            <p className="ml-12">{director}</p>
          </div>
          <div className="flex border-b-[2px] border-gray-100">
            <h2 className="font-semibold mt-2">Writers</h2>
            <p className="ml-14">{writers.length ? writers.join(" • ") : ""}</p>
          </div>
          <div className="flex border-b-[2px] border-gray-100">
            <h2 className="font-semibold mt-2">Stars</h2>
            <p className="ml-16">{stars.length ? stars.join(" • ") : ""}</p>
          </div>
        </div>
      </div>
      {/* Similar Movies */}

      <h2 className="text-lg font-semibold mt-16 ml-2 p-4 inline">
        More like this
      </h2>
      <SeeMore />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 p-5">
        {similarMovie.results
          .slice(0, 2)
          .map((similarMovie: any, index: number) => (
            <div key={index} className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
                alt={similarMovie.title}
                className="rounded-lg w-full shadow-md"
              />
              <p className="text-sm  mt-2">{similarMovie.title}</p>
              <p className="text-xs ">
                ⭐ {similarMovie.vote_average?.toFixed(1)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

// import { getTDMBMovie } from "@/utils/api"; // Import API function
// import { Star } from "lucide-react"; // Star Icon
// import Link from "next/link";

// interface MoviePageProps {
//   params: { slug: string };
// }

// export default async function MovieDetails({ params }: MoviePageProps) {
//   const { slug } = params;
//   const movie = await getTDMBMovie(`/movie/${slug}?language=en-US`);

//   if (!movie) {
//     return <p className="text-center mt-10 text-gray-500">Movie not found.</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       {/* Movie Poster */}
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="w-full h-auto rounded-lg shadow-md"
//       />

//       {/* Movie Title */}
//       <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>

//       {/* Movie Rating */}
//       <div className="flex items-center text-sm text-gray-600 mt-2">
//         <Star fill="#FDE047" strokeWidth={0} size={18} />
//         <p className="ml-1 font-medium">{movie.vote_average?.toFixed(1)}</p>
//         <span className="text-gray-500">/10</span>
//       </div>

//       {/* Movie Overview */}
//       <p className="mt-4 text-gray-700">
//         {movie.overview || "No overview available."}
//       </p>

//       {/* Release Date */}
//       <p className="mt-2 text-gray-600">
//         <strong>Release Date:</strong> {movie.release_date}
//       </p>

//       {/* Back Button */}
//       <Link href="/movies">
//         <span className="mt-6 inline-block px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer">
//           Back to Movies
//         </span>
//       </Link>
//     </div>
//   );
// }
