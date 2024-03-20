import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path ="/" exact Component={Pokedex} />
        <Route path="/pokemon/:name" Component={PokemonCard}/>
      </Routes>
    </Router>

  );
}

export default App;