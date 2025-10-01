import { Link } from "react-router-dom";
import { capitalize, formatPokemonId, getTypeColor } from '../../utils/helpers';
import './PokemonCard.css';

export const PokemonCard = ({pokemon}) => {
    const { id, name, types, sprites } = pokemon;

    return(
        <Link to={`/pokemon/${id}`} className="pokemon-card">
            <div className="pokemon-card-number">{formatPokemonId(id)}</div>

            <div className="pokemon-card-image">
                <img 
                    src={sprites.other['official-artwork'].front_default || sprites.front_default} 
                    alt={name}
                    loading="lazy"
                 />
            </div>

            <h3 className="pokemon-card-name">{capitalize(name)}</h3>
            <div className="pokemon-card-types">
                {types.map(({type}) => (
                    <span
                        key={type.name}
                        className="pokemon-type"
                        style={{backgroundColor: getTypeColor(type.name)}}
                    >
                        {capitalize(type.name)}
                    </span>

                ))}
            </div>
        </Link>
             
        
        
    )
}
