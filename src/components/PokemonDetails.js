

const PokemonDetails = ({ pokemon }) => {
  const primaryType = pokemon.types[0].type.name;
  const secondaryType = pokemon.types[1]?.type.name;

  return (
    <div className="pokemon-details-container">
      <h2>{pokemon.name}</h2>
      <img
        className="pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt=""
        title={pokemon.name}
      />
      <p>
        Type: {secondaryType ? `${primaryType}/${secondaryType}` : primaryType}{" "}
      </p>
      <p>
        Abilities:
        {pokemon.abilities.map((ability, index) => (
          <span key={index}>
            {/* checks if the current ability is not the last one in the list. If it's not the last one, it adds a comma after the ability name. */}
            {ability.ability.name}
            {index < pokemon.abilities.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p>
        Statistics:
        {pokemon.stats.map((stat, index) => (
          <span key={index}>
            {stat.stat.name} : {stat.base_stat}
            {index < pokemon.stats.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p>
        Height: {pokemon.height}
      </p>
      <p>
        Weight: {pokemon.weight}
      </p>
    </div>
  );
};
export default PokemonDetails;