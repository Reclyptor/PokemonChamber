import * as React from "react";
import { ReactComponent as SteelIcon } from "../../resources/badges/steel.svg";

const SteelBadge = () => {
  const color = "#5795A3";
  return <SteelIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default SteelBadge;