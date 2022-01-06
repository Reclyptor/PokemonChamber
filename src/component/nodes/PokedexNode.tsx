import React, { useEffect, useState } from "react";
import Busy from "../common/Busy";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../layout/Navbar";
import PokemonChamber from "../../api/PokemonChamber";
import PokemonGrid from "../pokemon/PokemonGrid";
import { Pokedex } from "../../types/Pokemon";

const PokedexNode = () => {
  const limit = 50;
  const [busy, setBusy] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pokedex, setPokedex] = useState<Pokedex>([]);

  const loadMore = () => PokemonChamber.getPokemon(limit, pokedex.length)
    .then(pokemon => {
      setPokedex(existing => [...existing, ...pokemon]);
      setHasMore(pokemon.length > 0);
    });

  useEffect(() => {
    if (pokedex.length === 0) {
      setBusy(true);
      loadMore().then(() => setBusy(false));
    }
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Busy busy={busy}>
        <InfiniteScroll
          dataLength={pokedex.length}
          next={loadMore}
          hasMore={hasMore}
          loader={null}
        >
          <PokemonGrid pokedex={pokedex} />
        </InfiniteScroll>
      </Busy>
    </div>
  );
};

export default PokedexNode;