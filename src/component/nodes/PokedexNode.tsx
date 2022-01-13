import React, { useEffect, useState } from "react";
import Busy from "../common/Busy";
import Navbar from "../layout/Navbar";
import PokemonChamber from "../../api/PokemonChamber";
import PokemonGrid from "../pokemon/PokemonGrid";
import { Pokemon } from "../../types/Pokemon";
import { State } from "../../redux/store";
import { State as PokedexState } from "../../redux/reducer/Pokedex";
import { State as PokemonState } from "../../redux/reducer/Pokemon";
import { Dispatch } from "redux";
import { setPokedexes } from "../../redux/action/Pokedex";
import { setPokemon } from "../../redux/action/Pokemon";
import { connect } from "react-redux";
import { Pokedex } from "../../types/Pokedex";

type StateProps = {
  pokedexes: PokedexState;
  pokemon: PokemonState;
};

type DispatchProps = {
  setPokedexes(_: Pokedex[]): void;
  setPokemon(_: Pokemon[]): void;
};

type PokedexNodeProps = StateProps & DispatchProps;

const ConnectedPokedexNode = (props: PokedexNodeProps) => {
  const [busy, setBusy] = useState(false);

  const setPokedex = (id: number) => {
    setBusy(true);
    PokemonChamber.getPokedex(id)
      .then(pokedex => pokedex.entries)
      .then(entries => entries.sort((x,y) => x.subregionID - y.subregionID))
      .then(entries => entries.map(entry => ({ ...entry.pokemon, id: entry.id })))
      .then(props.setPokemon)
      .then(() => setBusy(false));
  };

  useEffect(() => {
    if (props.pokedexes.length === 0) {
      PokemonChamber.getPokedexes()
        .then(props.setPokedexes);
    }
  }, []);

  useEffect(() => {
    if (props.pokemon.length === 0) {
      const pokedexID: number = props.pokedexes && props.pokedexes.length > 0 ? props.pokedexes[props.pokedexes.length-1].id : 0;
      if (pokedexID > 0) {
        setPokedex(pokedexID);
      }
    }
  }, [props.pokedexes]);


  return (
    <div>
      <header>
        <Navbar pokedexes={props.pokedexes} setPokedex={setPokedex} />
      </header>
      <Busy busy={busy}>
        <PokemonGrid pokemon={props.pokemon} />
      </Busy>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  return {
    pokedexes: state.pokedex,
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setPokedexes: (pokedexes: Pokedex[]) => dispatch(setPokedexes(pokedexes)),
    setPokemon: (pokemon: Pokemon[]) => dispatch(setPokemon(pokemon))
  };
};

const PokedexNode = connect(mapStateToProps, mapDispatchToProps)(ConnectedPokedexNode);
export default PokedexNode;