import React from "react";
import { ReactComponent as PsychicIcon } from "../../resources/badges/psychic.svg";

const PsychicBadge = () => {
  const color = "#FA8582";
  return <PsychicIcon width="20px" height="20px" style={{fill: color}}/>;
};

export default PsychicBadge;