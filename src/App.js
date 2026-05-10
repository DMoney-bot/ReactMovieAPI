import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Browse from "./Pages/Browse";
import Footer from "./Components/Footer";


function App() {
//This is a test
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/browse" element={<Browse />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/movie/:imdbID" element={<Movie />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
