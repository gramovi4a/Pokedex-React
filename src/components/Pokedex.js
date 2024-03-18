
const Pokedex = ({pokemonList, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
        {pokemonList.map((pokemon, index) => (
            <div key={index} className="pokemon-container">
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <img
                className="pokemon-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
                title={pokemon.name}
                alt=""
              />
            </div>
          ))}
          </>
    )
}

export default Pokedex