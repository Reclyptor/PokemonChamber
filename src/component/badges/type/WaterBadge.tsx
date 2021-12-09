import React from "react";
import { ReactComponent as WaterIcon } from "../../../resources/badges/type/water.svg";

const WaterBadge = () => {
  const color = "#539DDF";
  return <WaterIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default WaterBadge;