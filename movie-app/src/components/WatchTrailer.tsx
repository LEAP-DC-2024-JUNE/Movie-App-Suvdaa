"use client";

import useSWR from "swr";
import { getTDMBMovie } from "@/utils/api";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { VideoPlayer } from "@/components/VideoPlayer";

interface TrailerProps {
  movieId: number;
  title: string;
}

const fetchMovieTrailer = async (url: string) => {
  const data = await getTDMBMovie(url);
  return data;
};

export const Trailer = ({ movieId, title }) => {
  const { data, error, isLoading } = useSWR(
    `/movie/${movieId}/videos?language=en-US`,
    fetchMovieTrailer
  );

  if (error) return <p>Error loading trailer.</p>;

  const trailerKey = data?.results?.find((vid) => vid.type === "Trailer")?.key;

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">
            Watch Trailer
          </button>
        </DialogTrigger>
        <DialogContent>
          <h2 className="text-lg font-semibold">{title}</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : trailerKey ? (
            <VideoPlayer trailerKey={trailerKey} />
          ) : (
            <p>No trailer available.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
