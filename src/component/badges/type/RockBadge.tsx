import React from "react";
import { ReactComponent as RockIcon } from "../../../resources/badges/type/rock.svg";

const RockBadge = () => {
  const color = "#C9BC8A";
  return <RockIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default RockBadge;