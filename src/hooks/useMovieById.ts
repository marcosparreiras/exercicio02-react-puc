import { useEffect, useState } from "react";
import { IMovie, MoviesService } from "../api/MoviesService";

export function useMovieById(id: string) {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await MoviesService.getMovieDetail(id);
        setMovie(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
      setLoading(false);
    }
    getMovie();
  }, []);

  return { movie, loading };
}
