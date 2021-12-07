import {Pokedex, Pokemon} from "../types/Pokemon";
import axios from "axios";

const POKEMON_CHAMBER_API = process.env.REACT_APP_POKEMON_CHAMBER_API || "http://localhost:8080";

class PokemonChamber {
  static getPokedex = (): Promise<Pokedex> => {
    return axios
      .get(`${POKEMON_CHAMBER_API}/api/v1/pokemon`)
      .then(res => res.data as Pokedex);
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