import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const API_KEY = "57d5f13a";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "marvel";

  useEffect(() => {
    fetchMovies(initialSearch);
  }, []);

  function fetchMovies(term) {
    setLoading(true);
    setMovies([]);

    setTimeout(() => {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.Search) {
            console.log("No movies found");
            setLoading(false);
            return;
          }

          const moviePromises = data.Search.map((movie) =>
            fetch(
              `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`,
            ).then((res) => res.json()),
          );

          Promise.all(moviePromises).then((fullMovies) => {
            const filtered = fullMovies.filter((fullMovie) => {
              const movieRating = Math.round(fullMovie.imdbRating / 2);
              return movieRating >= rating;
            });
            setMovies(filtered);
            setLoading(false);
          });
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 1000);
  }

  useEffect(() => {
    fetchMovies(searchTerm || "marvel");
  }, [rating]);

  return (
    <>
      <div className="navMain">
        <h1 className="navTitle">Browse Movies</h1>
        <div className="searchWrapper">
          <input
            type="search"
            className="movieSearch"
            id="searchInput"
            value={searchTerm}
            placeholder="Search For Your Next Movie"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && fetchMovies(searchTerm)}
          />
          <button
            className="searchButton"
            id="searchBtn"
            onClick={() => fetchMovies(searchTerm)}
          >
            <i className="fa-solid fa-magnifying-glass click"></i>
          </button>
        </div>
      </div>
      <div className="results">
        <h1 className="resultsTitle">Search Results:</h1>
        <div className="ratingRange">
          <h2 className="ratingText">Rating Range 1 to 5</h2>
          <select
            className="ratingDropdown"
            onChange={(e) => setRating(Number(e.target.value))}
            id="ratingFilter"
          >
            <option value="0">All Ratings</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>

      <section className="movieSelection">
        <div className="movieSelectionWrapper">
          <div className="movieList" id="movieContainer">
            {movies.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <div key={movie.imdbID} className="movie click">
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                  <p>⭐{Math.round(parseFloat(movie.imdbRating) / 2)}.5</p>
                </div>
              </Link>
            ))}
          </div>
          {loading && (
            <div className="loadingState">
              <i className="fa-solid fa-spinner"></i>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Browse;
