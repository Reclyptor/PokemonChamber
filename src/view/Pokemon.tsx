import React, { ReactNode } from "react";
import Main from "../layout/Main";
import "../tailwind.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Pokemon = (props: Props) => {
  return (
    <Main className={ props.className }>
      { props.children }
    </Main>
  );
};

export default Pokemon;