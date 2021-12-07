import * as React from "react";
import { ReactComponent as PoisonIcon } from "../../resources/badges/poison.svg";

const PoisonBadge = () => {
  const color = "#B763FF";
  return <PoisonIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default PoisonBadge;