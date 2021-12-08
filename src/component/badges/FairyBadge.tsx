import React from "react";
import { ReactComponent as FairyIcon } from "../../resources/badges/fairy.svg";

const FairyBadge = () => {
  const color = "#EF90E6";
  return <FairyIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default FairyBadge;