import PokemonInfo from "../item/item";
import './list.css'

function PokemonList( {pokemonList} ) {
    return (
        <div className="container">
            <div className="text">
                <h1>All Pokemon</h1>
            </div>
            <div className="area">
                {pokemonList.length > 0 ? (
                    pokemonList.map(pokemon => <PokemonInfo key={pokemon.id} pokemon={pokemon} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
      );
}

export default PokemonList;