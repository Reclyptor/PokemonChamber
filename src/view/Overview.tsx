import React, { CSSProperties, forwardRef, useState, useEffect } from "react";
import Image from "../component/Image";
import Main from "../layout/Main";
import clsx from "clsx";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBigLeft as LeftArrowIcon } from "lucide-react";
import "../tailwind.css";
import useHAF from "../hook/useHAF";
import { capitalize } from "../util/string";
import { color } from "../color";

type OverviewProps = {
  pokedexID?: number | string;
  className?: string;
  style?: CSSProperties;
};

const Overview = forwardRef<HTMLDivElement, OverviewProps>((props, ref) => {
  const navigate = useNavigate();
  const params = useParams();
  const { ref: imgRef, hover } = useHAF<HTMLImageElement>();
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
      <button type="button" onClick={ () => navigate(-1) } className="absolute top-4 left-4 flex items-center justify-center w-fit h-fit px-2 py-1 rounded-lg bg-primary-mute hover:bg-primary active:bg-primary-accent cursor-pointer">
        <LeftArrowIcon color={ color("background") } fill={ color("background") } />
        <span className="font-bold text-[18px] text-background">Pokedex</span>
      </button>
      <div className="flex flex-col items-center justify-center">
        <Image ref={ imgRef } diameter={ 128 } src={ hover ? pokemon?.sprites.other?.home.front_shiny : pokemon?.sprites.other?.home.front_default } className="max-w-[384px] rounded-xl border-b border-b-4 pb-4 px-8 border-primary" />
        <span className="font-bold text-[48px] text-primary">{ capitalize(pokemon?.name) }</span>
      </div>
    </Main>
  );
});

export default Overview;