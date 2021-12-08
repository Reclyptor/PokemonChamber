import React from "react";
import { Type } from "../../types/Pokemon";
import TypeBadge from "./TypeBadge";
import Chip from "@mui/material/Chip";

type TypeChipProps = {
  type: Type;
};

const TypeChip = (props: TypeChipProps) => {
  return (
    <Chip sx={{border: 2, boxShadow: "0 0 0.3em #7EFCFF"}} label={<TypeBadge type={props.type}/>} variant="outlined"/>
  );
};

export default TypeChip;