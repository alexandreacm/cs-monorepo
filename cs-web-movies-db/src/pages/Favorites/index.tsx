import { useEffect, useState } from "react";
import { Movies } from "../../models/movie.model";
import { KEY_MOVIE, image_base_path } from "../../constants";
import { useNavigate } from "react-router-dom";

import "./favorites.css";
import { toast } from "react-toastify";
import { IMovie } from "../../models/imdb-movie.model";

function Favorites() {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    function loadingLocalMovies() {
      const localMovies = localStorage.getItem(KEY_MOVIE);

      if (localMovies !== null) {
        setMovies(JSON.parse(localMovies));
      }
    }

    loadingLocalMovies();
  }, []);

  function onNavigate(movieId: string) {
    navigate(`/detail-movie/${movieId}`);
  }

  function onDeleteMovie(movieId: string) {
    const filteredMovies = movies.filter(
      (movie: IMovie) => movie.imdbID !== movieId
    );

    setMovies(filteredMovies);
    localStorage.setItem(KEY_MOVIE, JSON.stringify(filteredMovies));
    toast.success("Movie deleted");
  }

  return (
    <>
      <div className="div-header">
        <h1>Favorites Movies</h1>
      </div>
      <div className="container">
        {!movies.length ? (
          <span>
            <h2>There is no movies yet :)</h2>
          </span>
        ) : (
          <div className="favorite-list">
            {movies.map((movie) => {
              return (
                <article key={movie?.imdbID}>
                  {/* <strong>{movie?.title}</strong> */}
                  <img src={`${movie.Poster}`} alt="" />
                  <div className="div-buttons">
                    <button
                      className="detail"
                      onClick={() => onNavigate(movie?.imdbID)}
                    >
                      Detail Movie
                    </button>
                    <button
                      onClick={() => onDeleteMovie(movie?.imdbID)}
                      className="delete"
                    >
                      Delete Movie
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
