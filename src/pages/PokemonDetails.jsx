import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { pokemonServices } from '../services/pokemonService';
import { Loader } from '../components/Loader/Loader';
import { capitalize, formatPokemonId, getTypeColor } from '../utils/helpers';
import './PokemonDetails.css';

export const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: pokemon, loading, error } = useFetch(
    () => pokemonServices.getPokemonDetail(id),
    [id]
  );

  if (loading) return <Loader />;
  
  if (error) {
    return (
      <div className="error">
        <p>Pokémon no encontrado</p>
        <button className="btn" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    );
  }

  if (!pokemon) return null;

  return (
    <div className="pokemon-detail">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Volver
      </button>

      <div className="detail-header">
        <div className="detail-image">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name}
          />
        </div>

        <div className="detail-info">
          <span className="detail-number">{formatPokemonId(pokemon.id)}</span>
          <h1 className="detail-name">{capitalize(pokemon.name)}</h1>

          <div className="detail-types">
            {pokemon.types.map(({ type }) => (
              <span 
                key={type.name}
                className="detail-type"
                style={{ backgroundColor: getTypeColor(type.name) }}
              >
                {capitalize(type.name)}
              </span>
            ))}
          </div>

          <div className="detail-stats-summary">
            <div className="stat-item">
              <span className="stat-label">Altura</span>
              <span className="stat-value">{pokemon.height / 10} m</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Peso</span>
              <span className="stat-value">{pokemon.weight / 10} kg</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h2>Estadísticas Base</h2>
        <div className="stats-list">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="stat-row">
              <span className="stat-name">
                {capitalize(stat.stat.name.replace('-', ' '))}
              </span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar"
                  style={{ 
                    width: `${(stat.base_stat / 255) * 100}%`,
                    backgroundColor: stat.base_stat > 100 ? '#10b981' : '#3b82f6'
                  }}
                />
              </div>
              <span className="stat-number">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <h2>Habilidades</h2>
        <div className="abilities-list">
          {pokemon.abilities.map(({ ability }) => (
            <div key={ability.name} className="ability-badge">
              {capitalize(ability.name.replace('-', ' '))}
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <h2>Movimientos</h2>
        <div className="moves-grid">
          {pokemon.moves.slice(0, 12).map(({ move }) => (
            <div key={move.name} className="move-item">
              {capitalize(move.name.replace('-', ' '))}
            </div>
          ))}
        </div>
        {pokemon.moves.length > 12 && (
          <p className="moves-note">Y {pokemon.moves.length - 12} movimientos más...</p>
        )}
      </div>
    </div>
  );
};