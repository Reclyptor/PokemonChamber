import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Pokemon, Type } from "../../types/Pokemon";
import { Grid } from "@material-ui/core";
import TypeBadge from "../badges/TypeBadge";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Card sx={{ width: 300, display: "inline-block" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.pokemon.images[1].src}
          alt={props.pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.pokemon.name}
          </Typography>
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={6}><TypeBadge type={props.pokemon.types.primary as Type}/></Grid>
            <Grid item xs={6}><TypeBadge type={props.pokemon.types.secondary as Type}/></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;