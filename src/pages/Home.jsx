import { useState, useEffect } from "react";
import { SearchBar } from "../components/Search/SearchBar";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { Loader } from "../components/Loader/Loader";
import { pokemonServices } from "../services/pokemonService";
import { useDebounce } from "../hooks/useDebounce";
import { API_CONFIG } from "../constants/config";
import { getPokemonIdFromUrl } from "../utils/helpers";
import "./Home.css";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    loadPokemons();
  }, [offset]);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

      setFilteredPokemons(filtered);
    }
  }, [debouncedSearch, pokemons]);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await pokemonServices.getPokemons(
        API_CONFIG.ITEMS_PER_PAGE,
        offset
      );

      const pokemonDetails = await Promise.all(
        response.results.map(async (pokemon) => {
          const id = getPokemonIdFromUrl(pokemon.url);
          return await pokemonServices.getPokemonDetail(id);
        })
      );

      setPokemons((prev) =>
        offset === 0 ? pokemonDetails : [...prev, ...pokemonDetails]
      );
      setFilteredPokemons((prev) =>
        offset === 0 ? pokemonDetails : [...prev, ...pokemonDetails]
      );
      setHasMore(response.next !== null);
    } catch (err) {
      setError("Error al cargar los Pokemon, Por favor, intentalo de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setOffset((prev) => prev + API_CONFIG.ITEMS_PER_PAGE);
  };

  if (loading && pokemons.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home">
      <div className="home-header">
        <h2>Descubre todos los Pokemon</h2>
        <p>Busca y explora informacion de todos los Pokemon</p>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder={"Pikachu, Charmander, Charizard..."}
      />

      <PokemonList pokemons={filteredPokemons} />

      {!searchTerm && hasMore && (
        <div className="load-more">
          <button
            className="btn btn-primary"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Cargar mas Pokemon"}
          </button>
        </div>
      )}
    </div>
  );
};
