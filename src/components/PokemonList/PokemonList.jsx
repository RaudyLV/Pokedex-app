import { PokemonCard } from "../PokemonCard/PokemonCard";
import './PokemonList.css';

export const PokemonList = ({pokemons}) => {
    if(!pokemons || pokemons.length === 0){
        return(
            <div className="empty-state">
                <p>No se encontraron pokemones</p>
            </div>
        )
    }

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
    )
}