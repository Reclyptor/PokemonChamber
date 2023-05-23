import React, { CSSProperties, forwardRef, ReactNode } from "react";
import clsx from "clsx";
import "../tailwind.css";

type MainProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  return (
    <div ref={ ref } className={ clsx("w-screen h-screen overflow-auto", props.className) } style={ props.style }>
      { props.children }
    </div>
  );
});

export default Main;
