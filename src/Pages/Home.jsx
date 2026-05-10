import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <section id="home">
      <div className="homeWrapper">
        <div className="row">
          <div className="navMain">
            <h1 className="homeTitle">Mellifluous Movie Theater</h1>
            <div className="searchWrapper2">
              <input
                type="search"
                className="movieSearch"
                id="searchInput"
                value={searchTerm}
                placeholder="Search For Your Next Movie"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && navigate(`/browse?search=${searchTerm}`)
                }
              />
              <button
                className="searchButton2"
                id="searchBtn"
                onClick={() => navigate(`/browse?search=${searchTerm}`)}
              >
                <i className="fa-solid fa-magnifying-glass click"></i>
              </button>
            </div>
            <div className="homeImgWrapper">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/044/514/545/small/background-a-movie-theater-where-love-stories-are-unfolding-on-the-big-screen-and-the-smell-of-popcorn-fills-the-air-photo.jpg"
                className="homeImg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
