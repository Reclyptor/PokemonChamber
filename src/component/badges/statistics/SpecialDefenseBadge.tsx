import React from "react";
import { ReactComponent as SpecialDefenseIcon } from "../../../resources/badges/statistics/specialdefense.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type SpecialDefenseBadgeProps = {
  specialDefense: number;
};

const SpecialDefenseBadge = (props: SpecialDefenseBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <SpecialDefenseIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.specialDefense}</Typography>
    </Box>
  );
};

export default SpecialDefenseBadge;