import { Action } from "./index";
import { Pokedex } from "../../types/Pokedex";

export const SET_POKEDEXES = "SET_POKEDEXES";

export const setPokedexes = (pokedexes: Pokedex[]): Action<Pokedex[]> => {
  return {
    type: SET_POKEDEXES,
    payload: pokedexes
  };
};