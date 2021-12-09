import React from "react";
import { ReactComponent as AttackIcon } from "../../../resources/badges/statistics/attack.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type AttackBadgeProps = {
  attack: number;
};

const AttackBadge = (props: AttackBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <AttackIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.attack}</Typography>
    </Box>
  );
};

export default AttackBadge;