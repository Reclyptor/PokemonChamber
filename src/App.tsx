import React, { useEffect, useState } from "react";
import Navbar from "./component/layout/Navbar";
import PokemonChamber from "./api/PokemonChamber";
import { Pokedex } from "./types/Pokemon";
import PokemonCard from "./component/pokemon/PokemonCard";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokedex>();

  useEffect(() => {
    if (!pokemon) {
      PokemonChamber.getPokemon().then(setPokemon);
    }
  });

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      { pokemon && pokemon.map(p => <PokemonCard key={p.id} pokemon={p} />) }
    </div>
  );
};

export default App;