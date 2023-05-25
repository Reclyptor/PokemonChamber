import React, { CSSProperties, forwardRef, ReactNode } from "react";
import clsx from "clsx";
import useBreakpoint from "../hook/useBreakpoint";
import "../tailwind.css";

type MainProps = {
  debug?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  const { width } = useBreakpoint();

  return (
    <div ref={ ref } className={ clsx("w-screen h-screen overflow-auto", props.className) } style={ props.style }>
      { props.debug && <span className="absolute top-4 right-4 bg-primary-mute rounded-lg px-2 font-bold text-[18px] text-background select-none z-10">{ `${ width }px` }</span> }
      { props.children }
    </div>
  );
});

export default Main;
