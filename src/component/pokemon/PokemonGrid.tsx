import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Pokemon } from "../../types/Pokemon";
import PokemonCard from "./PokemonCard";

type PokemonGridProps = {
  pokemon: Pokemon[];
};

const PokemonGrid = (props: PokemonGridProps) => {
  return (
    <Box sx={{ flexGrow: 1, margin: "2em 0.5em 1em 0.5em" }}>
      <Grid container spacing={1} columns={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 7 }}>
        {
          props.pokemon.map((pokemon, index) =>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
              <PokemonCard pokemon={pokemon}/>
            </Grid>
          )
        }
      </Grid>
    </Box>
  );
};

export default PokemonGrid;