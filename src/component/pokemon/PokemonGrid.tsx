import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Pokedex} from "../../types/Pokemon";
import PokemonCard from "./PokemonCard";

type PokemonGridProps = {
  pokedex: Pokedex;
};

const PokemonGrid = (props: PokemonGridProps) => {
  return (
    <Box sx={{ flexGrow: 1, margin: "1em" }}>
      <Grid container spacing={1} columns={{ xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }}>
        {
          props.pokedex.map((pokemon, index) =>
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