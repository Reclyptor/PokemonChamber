import React from "react";
import { ReactComponent as DarkIcon } from "../../../resources/badges/type/dark.svg";

const DarkBadge = () => {
  const color = "#595761";
  return <DarkIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default DarkBadge;