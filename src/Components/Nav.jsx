import React, { useState } from "react";
import MovieImg from "../assets/MovieImg.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section className="landing">
      {
        <nav>
          <img src={MovieImg} className="movieImg" alt="" />
          <div className={menuOpen ? "ham-menu active" : "ham-menu"}
          onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={menuOpen ? "navLinkMenu active" : "navLinkMenu"}>
            <ul className="navLinkList">
              <li className="navLink"></li>
              <li className="navLink linkHoverEffect">
                <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="navLink linkHoverEffect">
                <Link to="/browse" onClick={() => setMenuOpen(false)}>Find Your Next Movie</Link>
              </li>
              <li className="navLink">
                <button className="navButton" onClick={() => setMenuOpen(false)}>Contact</button>
              </li>
            </ul>
          </div>
        </nav>
      }
    </section>
  );
};

export default Nav;
