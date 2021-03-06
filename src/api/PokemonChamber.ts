import { Pokedex } from "../types/Pokedex";
import { Pokemon } from "../types/Pokemon";
import axios from "axios";

const POKEMON_CHAMBER_API = process.env.REACT_APP_POKEMON_CHAMBER_API || "http://localhost:8080";

class PokemonChamber {
  static getPokedexes = (): Promise<Pokedex[]> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokedex`)
      .then(res => res.data as Pokedex[]);
  };

  static getPokedex = (id: number): Promise<Pokedex> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokedex/${id}`)
      .then(res => res.data as Pokedex);
  };

  static getPokemon = (limit = -1, offset = -1): Promise<Pokemon[]> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokemon?limit=${limit}&offset=${offset}`)
      .then(res => res.data as Pokemon[]);
  };

  static getPokemonByID = (id: number): Promise<Pokemon> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokemon/${id}`)
      .then(res => res.data as Pokemon);
  }

  static getPokemonVariantsByID = (id: number): Promise<Pokemon[]> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokemon/${id}/variants`)
      .then(res => res.data as Pokemon[]);
  }

  static getPokemonVariantByID = (id: number, vid: number): Promise<Pokemon> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokemon/${id}/variants/${vid}`)
      .then(res => res.data as Pokemon);
  }
}

export default PokemonChamber;