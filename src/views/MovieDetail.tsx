import { useParams } from "react-router-dom";
import { useMovieById } from "../hooks/useMovieById";
import { Loading } from "../components/Loading";

export function MovieDetail() {
  const { movieId } = useParams<Record<string, string>>();
  const { movie, loading } = useMovieById(movieId as string);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {!movie && <p>Movie not found</p>}
      {movie && (
        <section className="movie-detail">
          <div className="container">
            <div className="row gx-5">
              <div className="col-6">
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt=""
                  />
                )}
              </div>
              <div className="col-6">
                <h1>{movie.title}</h1>
                <ul>
                  <li>Budget: {movie.budget}</li>
                  <li>
                    Original language:
                    {movie.original_language}
                  </li>
                  <li>Popularity: {movie.popularity}</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">{movie.overview}</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
