import React from "react";
import { ReactComponent as SpeedIcon } from "../../../resources/badges/statistics/speed.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type SpeedBadgeProps = {
  speed: number;
};

const SpeedBadge = (props: SpeedBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <SpeedIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.speed}</Typography>
    </Box>
  );
};

export default SpeedBadge;