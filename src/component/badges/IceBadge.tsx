import * as React from "react";
import { ReactComponent as IceIcon } from "../../resources/badges/ice.svg";

const IceBadge = () => {
  const color = "#76D1C1";
  return <IceIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default IceBadge;