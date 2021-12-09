import React from "react";
import { ReactComponent as FightingIcon } from "../../../resources/badges/type/fighting.svg";

const FightingBadge = () => {
  const color = "#D3425F";
  return <FightingIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default FightingBadge;