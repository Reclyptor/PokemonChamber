import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Pokemon, Type } from "../../types/Pokemon";
import TypeChip from "./TypeChip";
import roman from "../../util/roman";
import Grid from "@mui/material/Grid";
import HPBadge from "../badges/statistics/HPBadge";
import AttackBadge from "../badges/statistics/AttackBadge";
import DefenseBadge from "../badges/statistics/DefenseBadge";
import SpecialAttackBadge from "../badges/statistics/SpecialAttackBadge";
import SpecialDefenseBadge from "../badges/statistics/SpecialDefenseBadge";
import SpeedBadge from "../badges/statistics/SpeedBadge";
import TotalBadge from "../badges/statistics/TotalBadge";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = (props: PokemonCardProps) => {
  const [raised, setRaised] = useState(false);

  const raise = () => setRaised(true);
  const lower = () => setRaised(false);

  return (
    <Card sx={{ border: 2, boxShadow: "0 0 0.3em #7EFCFF", transform: raised ? "scale(1.05)" : null }} onMouseOver={raise} onMouseOut={lower}>
      <CardMedia>
        <Typography variant="h6" component="div" margin="0 .5em 0 .5em">
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <Box>{props.pokemon.id}</Box>
            <Box>{roman(props.pokemon.generation)}</Box>
          </Box>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={props.pokemon.images.find(img => img.image == "github")?.src || ""} alt={props.pokemon.name}/>
        </Box>
      </CardMedia>
      <CardContent>
        <Typography noWrap fontWeight="bold" variant="h6" component="div" align="center">
          {props.pokemon.name}
        </Typography>
        <Typography gutterBottom noWrap variant="caption" component="div" align="center">
          {props.pokemon.species}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}>
          {props.pokemon.types.primary && <TypeChip type={props.pokemon.types.primary as Type}/>}
          {props.pokemon.types.secondary && <TypeChip type={props.pokemon.types.secondary as Type}/>}
        </Box>
        <Grid container marginTop={3} columns={4} alignItems="center" alignContent="center">
          <Grid item xs={1} marginBottom={0}><TotalBadge total={props.pokemon.statistics.total}/></Grid>
          <Grid item xs={1} marginBottom={1}/>
          <Grid item xs={1} marginBottom={1}><HPBadge hp={props.pokemon.statistics.hp}/></Grid>
          <Grid item xs={1} marginBottom={1}><SpeedBadge speed={props.pokemon.statistics.speed}/></Grid>
          <Grid item xs={1} marginBottom={1}><AttackBadge attack={props.pokemon.statistics.attack}/></Grid>
          <Grid item xs={1} marginBottom={1}><DefenseBadge defense={props.pokemon.statistics.defense}/></Grid>
          <Grid item xs={1} marginBottom={1}><SpecialAttackBadge specialAttack={props.pokemon.statistics.specialAttack}/></Grid>
          <Grid item xs={1} marginBottom={1}><SpecialDefenseBadge specialDefense={props.pokemon.statistics.specialAttack}/></Grid>
        </Grid>
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