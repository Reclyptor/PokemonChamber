import React from "react";
import { ReactComponent as HPIcon } from "../../../resources/badges/statistics/hp.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type HPBadgeProps = {
  hp: number;
};

const HPBadge = (props: HPBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <HPIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.hp}</Typography>
    </Box>
  );
};

export default HPBadge;