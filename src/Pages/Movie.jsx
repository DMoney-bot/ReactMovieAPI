import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "57d5f13a";

const Movie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [reccomendations, setReccomendations] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${data.Genre.split(",")[0]}`)
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) setReccomendations(data.Search)
      })
  }, [imdbID])

  if (!movie) return <p>Loading...</p>;

  const starRating =
    movie.rating === "N/A"
      ? "Not Rated"
      : `⭐${Math.round(parseFloat(movie.imdbRating) / 2)}.5`;

  return (
    <div id="moviesBody">
      <div className="moviesContainer">
        <div className="row">
          <div className="movieSelectedTop">
            <Link to="/browse">Back to Browse</Link>
          </div>
          <div className="movieSelected">
            <figure className="movieSelectedFigure">
              <img
                src={movie.Poster}
                className="movieSelectedImg"
                alt={movie.Title}
              />
            </figure>
            <div className="movieSelectedDescription">
              <h1 className="movieSelectedTitle">{movie.Title}</h1>
              <p className="movieSelectedInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                numquam quisquam, quos ipsam quidem dolorem at incidunt
                recusandae assumenda, pariatur nam. Voluptatem, repudiandae nisi
                corporis porro obcaecati ullam. Earum, incidunt!
              </p>
              <p className="movieSelectedRating">Rating: {starRating}</p>
            </div>
          </div>
          <div className="movieRecsWrap">
            <div className="movieRecs">
              <h1 className="movieRecsTitle">Reccomended Movies</h1>
              <div className="movieRecsList">
                {reccomendations
                  .filter((rec) => rec.imdbID !== imdbID)
                  .slice(0, 6)
                  .map((rec) => (
                    <Link to={`/movie/${rec.imdbID}`} key={rec.imdbID}>
                      <div className="movie">
                        <img src={rec.Poster} alt={rec.Title} />
                        <h3>{rec.Title}</h3>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
