import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Pokemon, Type } from "../../types/Pokemon";
import Box from "@mui/material/Box";
import TypeChip from "./TypeChip";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, border: 2, boxShadow: "0 0 0.3em #8FFCFF" }}>
      <CardMedia>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={props.pokemon.images[1].src} alt={props.pokemon.name}/>
        </Box>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {props.pokemon.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {props.pokemon.types.primary && <TypeChip type={props.pokemon.types.primary as Type}/>}
          {props.pokemon.types.secondary && <TypeChip type={props.pokemon.types.secondary as Type}/>}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;