import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonCard.css";


const PokemonCard = () => {
  const { name } = useParams()
  const [pokemonData, setPokemonData] = useState(null);

  useEffect ( () => {
    const fetchSpecificPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonData(data); 
      } catch (err) {
        console.error("Error fetching Pokemon data:", err);
      }
    };

    fetchSpecificPokemonData();
  }, [name]);


  if (!pokemonData) {
    return <h2>Loading...</h2>;
  }


  return (
    <div className="pokemon-card-container">
      <div className="main-card">
      <h2>Your selected pokemon: {name}</h2> 
        <p> ID: {pokemonData.id}</p>
        <p> Weight {pokemonData.weight}</p>
        <p>Height: {pokemonData.height}</p>
        <p>Types:</p>
        <ul>
          {pokemonData.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
        <p>Abilities:</p>
        <ul>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default PokemonCard;


// <FlipCard
// key={index}
// imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
// name={pokemon.name}
// />
// const handleClick = () => {
//   setIsFlipped(!isFlipped);
// };
//  const [isFlipped, setIsFlipped] = useState(false);
// <img src={pokemonCard} alt="Card Backside" className="pokemon-image" />