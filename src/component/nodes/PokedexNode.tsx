import React, { useEffect, useState } from "react";
import Busy from "../common/Busy";
import Navbar from "../layout/Navbar";
import PokemonChamber from "../../api/PokemonChamber";
import PokemonGrid from "../pokemon/PokemonGrid";
import { Pokemon } from "../../types/Pokemon";
import { State } from "../../redux/store";
import { Dispatch } from "redux";
import { setPokemon } from "../../redux/action/Pokemon";
import { connect } from "react-redux";

type StateProps = {
  pokemon: Pokemon[];
};

type DispatchProps = {
  setPokemon(_: Pokemon[]): void;
};

type PokedexNodeProps = StateProps & DispatchProps & {

};

const ConnectedPokedexNode = (props: PokedexNodeProps) => {
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (props.pokemon.length === 0) {
      setBusy(true);
      PokemonChamber.getPokemon().then(props.setPokemon).then(() => setBusy(false));
    }
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Busy busy={busy}>
        <PokemonGrid pokemon={props.pokemon} />
      </Busy>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => {
  return {
    pokemon: state.pokemon || []
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setPokemon: (pokemon: Pokemon[]) => dispatch(setPokemon(pokemon))
  };
};

const PokedexNode = connect(mapStateToProps, mapDispatchToProps)(ConnectedPokedexNode);
export default PokedexNode;