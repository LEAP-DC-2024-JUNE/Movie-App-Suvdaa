import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { getTDMBMovie } from "@/utils/api";
import { useState } from "react";

const Genres = () => {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useSWR(
    "/genre/movie/list?language=en",
    getTDMBMovie
  );

  return (
    <div>
      //{" "}
      <Button
        onClick={() => setCount(count + 1)}
        className="hidden md:flex items-center gap-2"
      >
        Genre
      </Button>
      <div>
        {data?.genres.map((genre) => {
          return <div key={genre}>{genre.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Genres;
