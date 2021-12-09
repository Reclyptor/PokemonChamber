import React from "react";
import { ReactComponent as SpecialAttackIcon } from "../../../resources/badges/statistics/specialattack.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type SpecialAttackBadgeProps = {
  specialAttack: number;
};

const SpecialAttackBadge = (props: SpecialAttackBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <SpecialAttackIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.specialAttack}</Typography>
    </Box>
  );
};

export default SpecialAttackBadge;