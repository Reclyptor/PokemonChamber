import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Pokemon, Type } from "../../types/Pokemon";
import Box from "@mui/material/Box";
import TypeChip from "./TypeChip";
import roman from "../../util/roman";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Card sx={{ maxWidth: 250, border: 2, boxShadow: "0 0 0.3em #7EFCFF" }}>
      <CardMedia>
        <Typography variant="h6" component="div" margin="0 .5em 0 .5em">
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <Box>{props.pokemon.id}</Box>
            <Box>{roman(props.pokemon.generation)}</Box>
          </Box>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={props.pokemon.images[1].src} alt={props.pokemon.name}/>
        </Box>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom noWrap fontWeight="bold" variant="h6" component="div" align="center">
          {props.pokemon.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {props.pokemon.types.primary && <TypeChip type={props.pokemon.types.primary as Type}/>}
          {props.pokemon.types.secondary && <TypeChip type={props.pokemon.types.secondary as Type}/>}
        </Box>
      </CardContent>
      <Typography variant="caption" component="div" margin="0 .5em 0 .5em">
        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
          <Box>{props.pokemon.status}</Box>
          <Box>{`${props.pokemon.physique.height / 10} m / ${props.pokemon.physique.weight / 10} kg`}</Box>
        </Box>
      </Typography>
    </Card>
  );
};

export default PokemonCard;