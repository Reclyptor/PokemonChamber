import React, { useEffect, useState } from "react";
import Navbar from "./component/layout/Navbar";
import PokemonChamber from "./api/PokemonChamber";
import PokemonGrid from "./component/pokemon/PokemonGrid";
import { Pokedex } from "./types/Pokemon";

const App = () => {
  const [pokedex, setPokedex] = useState<Pokedex>([]);

  useEffect(() => {
    if (pokedex.length === 0) {
      PokemonChamber.getPokemon().then(setPokedex);
    }
  });

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <PokemonGrid pokedex={pokedex}/>
    </div>
  );
};

export default App;