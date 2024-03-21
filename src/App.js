import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
            <Route path="/" exact Component={Pokedex} />
            <Route path="/pokemon/:name" Component={PokemonCard} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
