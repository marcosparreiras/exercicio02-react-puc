import { useEffect, useState } from "react";
import { IMovie, MoviesService } from "../api/MoviesService";

export function useMovie() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await MoviesService.getMovies();
        setMovies(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
      setLoading(false);
    }
    getMovies();
  }, []);

  return { movies, loading };
}
