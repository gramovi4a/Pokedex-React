import React from "react";
import Pokedex from "./components/Pokedex";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(10);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
        );
        const data = await response.json();
        // Extract the array of Pokémon objects from the response data, otherwise react complain at "pokemonList.map is not a function"
        const pokemons = data.results;
        setPokemonList(pokemons);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemons();
  }, []); //  [] => run only when the component is first displayed on the screen, when it mounts.

  // Get current pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pokedex">
      <h1 className="pokedex-header">Welcome to Pokedex!</h1>
      <div className="pokemons-list">
        <Pokedex pokemonList={currentPokemons} loading={loading} />
      </div>

      <div className="pagination">
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemonList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
