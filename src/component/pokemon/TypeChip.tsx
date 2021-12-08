import React from "react";
import { Type } from "../../types/Pokemon";
import { Chip } from "@material-ui/core";
import TypeBadge from "./TypeBadge";

type TypeChipProps = {
  type: Type;
};

const TypeChip = (props: TypeChipProps) => {
  return (
    <Chip style={{boxShadow: "0 0 0.3em #8FFCFF"}} label={<TypeBadge type={props.type}/>} variant="outlined"/>
  );
};

export default TypeChip;