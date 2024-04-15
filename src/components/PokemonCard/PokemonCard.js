import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonCard.css";

const TypeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const PokemonCard = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchSpecificPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
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

  const generateCard = () => {
    if (!pokemonData) return null;

    const { stats, sprites, name: pokeName, types } = pokemonData;
    const hp = stats[0].base_stat;
    const imgSrc = sprites.other.dream_world.front_default;
    const statAttack = stats[1].base_stat;
    const statDefense = stats[2].base_stat;
    const statSpeed = stats[5].base_stat;
    const themeColor = TypeColor[types[0].type.name];

    return (
      <div
        id="main-card"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`,
        }}
      >
        <p className="hp">
          <span>HP </span>
          {hp}
        </p>
        <img className="pokemon-image" src={imgSrc} alt={pokeName} />
        <h2 className="poke-name">{pokeName}</h2>
        <div className="types">
          {types.map((type, index) => (
            <span
              key={index}
              style={{ backgroundColor: TypeColor[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="stats">
          <div>
            <h3>{statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card-container">
      <div className="pokemon-card-container">{generateCard()}</div>
    </div>
  );
};

export default PokemonCard;
