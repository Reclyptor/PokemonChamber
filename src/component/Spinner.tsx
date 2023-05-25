import React, { CSSProperties, forwardRef } from "react";
import clsx from "clsx";
import { ReactComponent as SpinnerIcon } from "../resource/icon/common/spinner.svg";
import { color } from "../color";
import "../tailwind.css";

type SpinnerProps = {
  size?: number;
  loading?: boolean;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => {
  return !props.loading ? null : (
    <SpinnerIcon ref={ ref } width={ props.size || 128 } className={ clsx("animate-spin rounded-full", props.className) } style={ props.style } color={ props.color || color("primary") } />
  );
});

export default Spinner;