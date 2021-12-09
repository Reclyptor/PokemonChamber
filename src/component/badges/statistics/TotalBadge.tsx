import React from "react";
import { ReactComponent as TotalIcon } from "../../../resources/badges/statistics/total.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TotalBadgeProps = {
  total: number;
};

const TotalBadge = (props: TotalBadgeProps) => {
  const color = "#7DFAFE";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <TotalIcon width="20px" height="20px" style={{fill: color}}/>
      <Typography>{props.total}</Typography>
    </Box>
  );
};

export default TotalBadge;