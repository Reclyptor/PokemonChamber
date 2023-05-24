import React, { CSSProperties, forwardRef, useState, useEffect } from "react";
import Card from "../component/Card";
import Main from "../layout/Main";
import clsx from "clsx";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useNavigate, useParams } from "react-router-dom";
import "../tailwind.css";

type OverviewProps = {
  pokedexID?: number | string;
  className?: string;
  style?: CSSProperties;
};

const Overview = forwardRef<HTMLDivElement, OverviewProps>((props, ref) => {
  const navigate = useNavigate();
  const params = useParams();
  const pokedexID = props.pokedexID || params.pokedexID;
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const api = new PokemonClient();
    switch (typeof pokedexID) {
      case 'number': api.getPokemonById(pokedexID).then(setPokemon).catch(ignored => ({})); break;
      case 'string': api.getPokemonByName(pokedexID).then(setPokemon).catch(ignored => ({})); break;
      default: break;
    }
  }, [pokedexID]);

  return (
    <Main ref={ ref } className={ clsx("flex items-center justify-center", props.className) } style={ props.style }>
      { pokemon?.id && <Card pokedexID={ pokemon?.id } onClick={ () => navigate(-1) } /> }
    </Main>
  );
});

export default Overview;