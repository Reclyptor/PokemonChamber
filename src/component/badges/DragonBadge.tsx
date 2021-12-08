import React from "react";
import { ReactComponent as DragonIcon } from "../../resources/badges/dragon.svg";

const DragonBadge = () => {
  const color = "#0C6AC8";
  return <DragonIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default DragonBadge;