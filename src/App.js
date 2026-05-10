import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Browse from "./Pages/Browse";
import Footer from "./Components/Footer";


function App() {

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/browse" element={<Browse />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/movie/:imdbID" element={<Movie />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
