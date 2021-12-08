import React from "react";
import { ReactComponent as FireIcon } from "../../resources/badges/fire.svg";

const FireBadge = () => {
  const color = "#FBA64C";
  return <FireIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default FireBadge;