import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="routes">
          <Routes>
             <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokemonCard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
