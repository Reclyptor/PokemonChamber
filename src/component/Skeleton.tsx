import React, { CSSProperties, ReactNode } from "react";
import ReactSkeleton from "react-loading-skeleton";
import { color } from "../color";
import "react-loading-skeleton/dist/skeleton.css";
import "../tailwind.css";

type SkeletonProps = {
  loading?: boolean;
  count?: number;
  width?: string | number;
  height?: string | number;
  baseColor?: string;
  highlightColor?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Skeleton = (props: SkeletonProps) => {
  return !!props.loading ?
    <ReactSkeleton
      inline
      count={ props.count }
      width={ props.width || "100%" }
      height={ props.height || "100%" }
      baseColor={ props.baseColor || color("background-accent") }
      highlightColor={ props.highlightColor || color("primary") }
      wrapper={ ({ children }) => <div className={ props.className } style={ props.style }>{ children }</div> }
    /> : <>{ props.children }</>;
};

export default Skeleton;