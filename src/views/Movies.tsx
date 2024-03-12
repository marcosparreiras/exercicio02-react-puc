import { Loading } from "../components/Loading";
import { Movie } from "../components/Movie";
import { useMovie } from "../hooks/useMovies";

export function Movies() {
  const { movies, loading } = useMovie();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
