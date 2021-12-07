import * as React from "react";
import { ReactComponent as GroundIcon } from "../../resources/badges/ground.svg";

const GroundBadge = () => {
  const color = "#DA7C4D";
  return <GroundIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default GroundBadge;