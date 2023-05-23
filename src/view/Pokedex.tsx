import React, { ReactNode } from "react";
import Card from "../component/Card";
import Main from "../layout/Main";
import clsx from "clsx";
import { range } from "../util/array";
import "../tailwind.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Pokedex = (props: Props) => {
  return (
    <Main className={ clsx("flex", props.className) }>
      { range(10, 1).map((id) => <Card key={ id } id={ id } className="mx-1" />) }
    </Main>
  );
};

export default Pokedex;