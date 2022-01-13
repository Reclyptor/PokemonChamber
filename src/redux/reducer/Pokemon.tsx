import { Action } from "../action";
import { SET_POKEMON } from "../action/Pokemon";
import { Pokemon } from "../../types/Pokemon";

const setPokemon = (state: Pokemon[], action: Action<Pokemon[]>): Pokemon[] => {
  return action.payload;
};

const PokemonReducer = (state: Pokemon[] = [], action: Action<any>) => {
  switch (action.type) {
    case SET_POKEMON: return setPokemon(state, action);
    default: return state;
  }
};

export default PokemonReducer;