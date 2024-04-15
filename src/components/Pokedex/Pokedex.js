import "./Pokedex.css";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(8);

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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="home" id="home">
    <div className="pokedex">
      <h1 className="pokedex-header">Welcome to Pokédex!</h1>
      <div className="pokemon-container">
        {currentPokemons.map((pokemon, index) => (
          <Link
            className="pokemon-card"
            key={index}
            to={`/pokemon/${pokemon.name}`}
            style={{ textDecoration: "none" }}
          >

              <p className="pokemon-name">{pokemon.name}</p>
              <img
                className="pokemon-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                title={pokemon.name}
                alt=""
              />
          </Link>
        ))}
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

    </section>

  );
};

export default Pokedex;
