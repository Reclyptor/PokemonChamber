import { combineReducers } from "redux";
import PokedexReducer from "./Pokedex";
import PokemonReducer from "./Pokemon";

const rootReducer = combineReducers({
  pokedex: PokedexReducer,
  pokemon: PokemonReducer,
});

export default rootReducer;