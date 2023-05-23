import React, { ReactNode } from "react";
import clsx from "clsx";
import "../tailwind.css";

type Props = {
  children?: ReactNode;
  className?: string;
}

const Pokedex = (props: Props) => {
  return (
    <div className={ clsx("w-screen h-screen overflow-auto", props.className) }>
      { props.children }
    </div>
  );
};

export default Pokedex;