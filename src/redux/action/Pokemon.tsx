import { Action } from "./index";
import { Pokemon } from "../../types/Pokemon";

export const SET_POKEMON = "SET_POKEMON";

export const setPokemon = (pokemon: Pokemon[]): Action<Pokemon[]> => {
  return {
    type: SET_POKEMON,
    payload: pokemon
  };
};