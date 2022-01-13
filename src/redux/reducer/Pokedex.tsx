import { Action } from "../action";
import { SET_POKEDEXES } from "../action/Pokedex";
import { Pokedex } from "../../types/Pokedex";

export type State = Pokedex[];

const setPokedexes = (state: State, action: Action<Pokedex[]>): State => {
  return action.payload;
};

const PokedexReducer = (state: State = [], action: Action<any>) => {
  switch (action.type) {
    case SET_POKEDEXES: return setPokedexes(state, action);
    default: return state;
  }
};

export default PokedexReducer;