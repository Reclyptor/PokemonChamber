import {Pokedex} from "../types/Pokemon";
import axios from "axios";

const POKEMON_CHAMBER_API = process.env.POKEMON_CHAMBER_API;

class PokemonChamber {
  getPokedex = (): Pokedex => {
    return [];
  };

  getPokemon = (id: number) => {
    axios.get(`${POKEMON_CHAMBER_API}/api/v1/pokemon${id}`)
      .then(res => res.data)
      .then(console.log);
  }
}

export default Pokemonchamber;