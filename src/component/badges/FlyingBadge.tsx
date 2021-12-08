import React from "react";
import { ReactComponent as FlyingIcon } from "../../resources/badges/flying.svg";

const FlyingBadge = () => {
  const color = "#A1BBEC";
  return <FlyingIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default FlyingBadge;