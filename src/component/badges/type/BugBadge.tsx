import React from "react";
import { ReactComponent as BugIcon } from "../../../resources/badges/type/bug.svg";

const BugBadge = () => {
  const color = "#92BD2D";
  return <BugIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default BugBadge;