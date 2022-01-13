import { Action } from "../action";
import { SET_POKEMON } from "../action/Pokemon";
import { Pokemon } from "../../types/Pokemon";

export type State = Pokemon[];

const setPokemon = (state: State, action: Action<Pokemon[]>): State => {
  return action.payload;
};

const PokemonReducer = (state: State = [], action: Action<any>) => {
  switch (action.type) {
    case SET_POKEMON: return setPokemon(state, action);
    default: return state;
  }
};

export default PokemonReducer;