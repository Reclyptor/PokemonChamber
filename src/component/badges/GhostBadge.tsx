import React from "react";
import { ReactComponent as GhostIcon } from "../../resources/badges/ghost.svg";

const GhostBadge = () => {
  const color = "#5F6DBC";
  return <GhostIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default GhostBadge;