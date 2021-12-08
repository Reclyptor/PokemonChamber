import * as React from "react";
import { ReactComponent as GrassIcon } from "../../resources/badges/grass.svg";

const GrassBadge = () => {
  const color = "#60BD58";
  return <GrassIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default GrassBadge;