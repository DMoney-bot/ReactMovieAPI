import React from "react";
import MovieImg from '../assets/MovieImg.png'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="landing">
      {
        <nav>
          <ul className="navLinkList">
            <li className="navLink">
              <img src={MovieImg} className="movieImg" alt="" />
            </li>
            <li className="navLink linkHoverEffect">
              <Link to="/home">Home</Link>
            </li>
            <li className="navLink linkHoverEffect">
              <Link to="/browse">Find Your Next Movie</Link>
            </li>
            <li className="navLink">
              <button className="navButton">Contact</button>
            </li>
          </ul>
        </nav>
      }
    </section>
  );
};

export default Nav;
