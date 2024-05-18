/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { api } from "../../services/api.movie";
// import { Movies, ResponseType } from "../../models/movie.model";
// import { image_base_path } from "../../constants";
import { Link } from "react-router-dom";

import "./home.css";
import { IMovie } from "../../models/imdb-movie.model";
import FormSearch from "../../components/FormSearch";
import { toast } from "react-toastify";

function Home() {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [search, setSearch] = useState("");
  // const [movies, setMovies] = useState<Array<Movies>>([]);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (search.length === 0) {
      toast.error("You need to fill in the search field`");
      return;
    }

    setLoading(true);

    api
      .getIMDbMovies(search)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        setSearch("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      {!movies.length ? (
        <div className="movie-list">
          <FormSearch
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
          <div className="no-movies">
            <label>There are no movies that matched.</label>
          </div>
        </div>
      ) : (
        <div className="movie-list">
          <FormSearch
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
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
