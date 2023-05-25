import React, { CSSProperties, forwardRef, useEffect, useState } from "react";
import Image from "../component/Image";
import Main from "../layout/Main";
import clsx from "clsx";
import useHAF from "../hook/useHAF";
import { ArrowBigLeft as LeftArrowIcon } from "lucide-react";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { capitalize } from "../util/string";
import { color } from "../color";
import { useNavigate, useParams } from "react-router-dom";
import "../tailwind.css";
import Skeleton from "../component/Skeleton";

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
    <Main ref={ ref } className={ clsx("flex items-center justify-center px-8", props.className) } style={ props.style }>
      <button type="button" onClick={ () => navigate("/") } className="absolute top-4 left-4 flex items-center justify-center w-fit h-fit px-2 py-1 rounded-lg bg-primary-mute hover:bg-primary active:bg-primary-accent cursor-pointer">
        <LeftArrowIcon color={ color("background") } fill={ color("background") } />
        <span className="font-bold text-[18px] text-background">Pokedex</span>
      </button>
      <div className="flex flex-col items-center justify-center w-full">
        <Image ref={ imgRef } diameter={ 128 } src={ hover ? pokemon?.sprites.other?.home.front_shiny : pokemon?.sprites.other?.home.front_default } className="w-full max-w-[384px] rounded-xl border-b border-b-4 p-2 border-primary" />
        <Skeleton loading={ !pokemon } className="flex items-center justify-center w-[256px] h-[72px] py-3">
          <span className="w-fit h-[72px] font-bold text-[48px] text-primary">{ capitalize(pokemon?.name) }</span>
        </Skeleton>
      </div>
    </Main>
  );
});

export default Overview;