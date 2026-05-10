import React from "react";
import MovieImg from '../assets/MovieImg.png'

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
              <a href="/home">Home</a>
            </li>
            <li className="navLink linkHoverEffect">
              <a href="/browse">Find Your Next Movie</a>
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
