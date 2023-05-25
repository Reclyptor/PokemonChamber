import React, { CSSProperties, ReactNode, forwardRef, useState } from "react";
import Spinner from "./Spinner";
import clsx from "clsx";
import "../tailwind.css";

type ImageProps = {
  src?: string | null;
  alt?: string;
  fill?: string;
  diameter?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Spinner loading={ loading } size={ props.diameter || 64 } />
      <img ref={ ref } src={ props.src || '' } className={ clsx({ "hidden": loading }, props.className) } style={ props.style } alt={ props.alt } onLoad={ () => setLoading(false) } />
    </>
  );
});

export default Image;