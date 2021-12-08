import React from "react";
import { ReactComponent as NormalIcon } from "../../resources/badges/normal.svg";

const NormalBadge = () => {
  const color = "#A0A29F";
  return <NormalIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default NormalBadge;