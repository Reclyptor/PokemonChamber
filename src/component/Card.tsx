import React, { CSSProperties, useEffect, useState } from "react";
import Stat, { StatProps } from "./Stat";
import Type, { TypeProps } from "./Type";
import clsx from "clsx";
import { Pokemon, PokemonClient, PokemonStat } from "pokenode-ts";
import { capitalize } from "../util/string";
import { color } from "../color";
import "../tailwind.css";
import useHAF from "../hook/useHAF";
import Image from "./Image";

export type CardProps = {
  pokedexID: number | string;
  className?: string;
  style?: CSSProperties;
};

const Card = (props: CardProps) => {
  const { ref, hover } = useHAF<HTMLImageElement>();
  const [pokemon, setPokemon] = useState<Pokemon>();

  /**
   * HP = floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + Level + 10
   * Other Stats = (floor(0.01 x (2 x Base + IV + floor(0.25 x EV)) x Level) + 5) x Nature
   * where Max IV = 31, Max EV = 252, Max Level = 100, and Beneficial Nature adds 10% to Max Stat
   */
  const maxStat = (stat: PokemonStat, iv: number = 31, ev: number = 252, level: number = 100, nature: number = 1.1): number => {
    return stat.stat.name === "hp" ?
      Math.trunc(Math.floor(0.01 * (2 * stat.base_stat + iv + Math.floor(0.25 * ev)) * level) + level + 10) :
      Math.trunc(nature * Math.floor(0.01 * (2 * stat.base_stat + iv + Math.floor(0.25 * ev)) * level) + 5)
  };

  useEffect(() => {
    const api = new PokemonClient();
    switch (typeof props.pokedexID) {
      case 'number': api.getPokemonById(props.pokedexID).then(setPokemon).catch(ignored => ({})); break;
      case 'string': api.getPokemonByName(props.pokedexID).then(setPokemon).catch(ignored => ({})); break;
      default: break;
    }
  }, [props.pokedexID]);

  return (
    <div className={ clsx("min-w-[148px] w-[148px] max-w-[148px] min-h-[262px] h-fit bg-background-mute hover:bg-background active:bg-background-accent border border-primary shadow-md shadow-primary/60 rounded-lg cursor-pointer", props.className) } style={ props.style }>
      <div className="flex items-center justify-between w-full h-fit px-2">
        <span className="font-bold text-primary text-lg">{ `#${ props.pokedexID }` }</span>
        <span className="flex items-center">{ pokemon?.types.map(({ type }, idx) => <Type key={ idx } type={ type.name as TypeProps['type'] } size="18px" className="min-w-[18px] mx-[2px]"/>) }</span>
      </div>
      <span className="flex items-center justify-center w-full h-8 font-bold text-primary text-lg text-center leading-4">{ pokemon?.name.split('-').map(capitalize).join(' ') }</span>
      <div className="flex items-center justify-center w-full h-[96px]">
        <Image ref={ ref } src={ (hover ? pokemon?.sprites.front_shiny : pokemon?.sprites.front_default) || '' } alt={ String(props.pokedexID) } className="object-contain" />
      </div>
      {
        pokemon?.stats.map((stat, idx) => (
          <div key={ idx } className="flex items-center justify-between w-full h-fit px-2">
            <div className="flex items-center justify-between min-w-[43px] h-fit">
              <Stat stat={ stat.stat.name as StatProps['stat'] } size="18px" className="min-w-[18px] mr-1"/>
              <div className="w-fit font-bold text-primary text-xs">{ stat.base_stat }</div>
            </div>
            <div className="flex items-center justify-end w-full h-[10px] border border-primary rounded-sm mx-1 transition-width ease-linear duration-200" style={ { background: `linear-gradient(90deg, ${ color('primary') } ${ 100 * stat.base_stat / 180 }%, transparent 0%)` } } />
            <div className="w-fit font-bold text-primary text-xs">{ maxStat(stat) }</div>
          </div>
        ))
      }
    </div>
  );
};

export default Card;
