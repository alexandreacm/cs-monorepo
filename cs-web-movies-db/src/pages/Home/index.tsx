/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { api } from "../../services/api.movie";
// import { Movies, ResponseType } from "../../models/movie.model";
// import { image_base_path } from "../../constants";
import { Link } from "react-router-dom";

import "./home.css";
import { IMovie, IResponseMovie } from "../../models/imdb-movie.model";

function Home() {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  // const [movies, setMovies] = useState<Array<Movies>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await api.getIMDbMovies("tango");
        const data: IResponseMovie = await response.json();

        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        console.log("ERROR: ", error);
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  // useEffect(() => {
  //   async function loadMovies() {
  //     try {
  //       const response = await api.loadMovies();
  //       const data: ResponseType = await response.json();

  //       setMovies(data?.results.slice(0, 10));
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("ERROR: ", error);
  //       setLoading(false);
  //     }
  //   }

  //   loadMovies();
  // }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => {
            return (
              <article key={movie?.imdbID}>
                <strong>{movie?.Title}</strong>
                <img src={`${movie.Poster}`} alt="" />
                <Link to={`/detail-movie/${movie.imdbID}`}>Detail Movie</Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
