import React, { ReactNode, useEffect, useState } from "react";
import Stat, { StatProps } from "./Stat";
import Type, { TypeProps } from "./Type";
import clsx from "clsx";
import { Pokemon, PokemonClient, PokemonStat } from "pokenode-ts";
import { capitalize } from "../util/string";
import "../tailwind.css";
import { color } from "../color";

export type CardProps = {
  id: number | string;
  children?: ReactNode;
  className?: string;
};

const Card = (props: CardProps) => {
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
    switch (typeof props.id) {
      case 'number': api.getPokemonById(props.id).then(setPokemon); break;
      case 'string': api.getPokemonByName(props.id).then(setPokemon); break;
      default: break;
    }
  }, [props.id]);

  return !pokemon ? null : (
    <div className={ clsx("min-w-[148px] w-[148px] h-[262px] bg-background-mute hover:bg-background active:bg-background-accent border border-primary shadow-md shadow-primary/60 rounded-lg cursor-pointer", props.className) }>
      <div className="flex items-center justify-between mx-2">
        <span className="font-bold text-primary text-lg">{ `#${ pokemon.id }` }</span>
        <span className="flex items-center">{ pokemon.types.map(({ type }, idx) => <Type key={ idx } type={ type.name as TypeProps['type'] } size="18px" className="min-w-[18px] mx-[2px]" />) }</span>
      </div>
      <div className="flex items-center justify-center w-full h-[96px]">
        <img src={ pokemon.sprites.front_default || '' } alt={ `${ props.id }-${ pokemon.name }` } className="object-contain" />
      </div>
      <div className="flex items-center justify-center w-full h-fit">
        <span className="flex items-center justify-center font-bold text-primary text-xl">{ capitalize(pokemon.name) }</span>
      </div>
      <>
        {
          pokemon.stats.map((stat, idx) => (
            <div key={ idx } className="flex items-center justify-between w-full h-fit px-2">
              <div className="flex items-center justify-between min-w-[43px] h-fit">
                <Stat stat={ stat.stat.name as StatProps['stat'] } size="18px" className="min-w-[18px] mr-1" />
                <div className="w-fit font-bold text-primary text-xs">{ stat.base_stat }</div>
              </div>
              <div className="flex items-center justify-end w-full h-[10px] border border-primary rounded-sm mx-1 transition-width ease-linear duration-200" style={{ background: `linear-gradient(90deg, ${ color('primary') } ${ 100 * stat.base_stat / 180 }%, transparent 0%)` }} />
              <div className="w-fit font-bold text-primary text-xs">{ maxStat(stat) }</div>
            </div>
          ))
        }
      </>
    </div>
  );
};

export default Card;