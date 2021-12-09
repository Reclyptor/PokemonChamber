import React from "react";
import { ReactComponent as DefenseIcon } from "../../../resources/badges/statistics/defense.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type DefenseBadgeProps = {
  defense: number;
};

const DefenseBadge = (props: DefenseBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <DefenseIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.defense}</Typography>
    </Box>
  );
};

export default DefenseBadge;