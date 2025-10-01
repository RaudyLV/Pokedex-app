import { API_CONFIG } from '../constants/config';

const {API_BASE_URL} = API_CONFIG;

export const pokemonServices = {
    getPokemons: async (limit = 20, offset = 0) => {
        try{
            const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
            if(!response.ok) throw new Error('Error fetching pokemons');

            return await response.json();
        }catch(err){
            console.error('Error en getPokemons: ', err);
            throw err;
        }
    },

    getPokemonDetail: async (idOrName) => {
        try{
            const response = await fetch(`${API_BASE_URL}/pokemon/${idOrName}`);
            if(!response.ok) throw new Error("Pokemon no encontrado");

            return await response.json();
        }catch(err){
            console.error("Error en getPokemonDetails: ", err);
            throw err;
        }
    },

    searchPokemonByName: async(name) => {
        try{
            const response = await fetch(
                `${API_BASE_URL}/pokemon/${name.toLowerCase()}`  
            );

            if(!response.ok) return null;

            return await response.json();
        }catch(err){
            return null;
        }
    },

    getPokemonSpecies: async (id) => {
        try{
            const response = await fetch(
                `${API_BASE_URL}/pokemon-species/${id}`
            );
            
            if(!response.ok) throw new Error("Especie no encontrada");

            return await response.json();
        }catch(err){
            console.error('Error en getPokemonSpecies: ', err);
            throw err;
        }
    }
}



