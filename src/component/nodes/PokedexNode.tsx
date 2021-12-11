import React, { useEffect, useState } from "react";
import PokemonChamber from "../../api/PokemonChamber";
import Navbar from "../layout/Navbar";
import PokemonGrid from "../pokemon/PokemonGrid";
import { Pokedex } from "../../types/Pokemon";

const PokedexNode = () => {
  const [pokedex, setPokedex] = useState<Pokedex>([]);

  useEffect(() => {
    if (pokedex.length === 0) {
      PokemonChamber.getPokemon().then(setPokedex);
    }
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <PokemonGrid pokedex={pokedex} />
    </div>
  );
};

export default PokedexNode;