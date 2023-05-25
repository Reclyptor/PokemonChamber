import { useEffect, useMemo, useState } from "react";

const XS = 0;
const SM = 640;
const MD = 768;
const LG = 1024;
const XL = 1280;
const XXL = 1536;

const getBreakpoint = (width: number): string => {
  if (width < SM) {
    return 'xs';
  } else if (width < MD) {
    return 'sm';
  } else if (width < LG) {
    return 'md';
  } else if (width < XL) {
    return 'lg';
  } else if (width < XXL) {
    return 'xl';
  } else {
    return '2xl';
  }
};

const useBreakpoint = () => {
  const [div, ref] = useState<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const breakpoint = getBreakpoint(width);

  const resize = useMemo(() => (): void => {
    setWidth(!div ? window.innerWidth : div.clientWidth);
    setHeight(!div ? window.innerHeight : div.clientHeight);
  }, [div]);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  return {
    ref,
    width,
    height,
    breakpoint,
    xs: width >= XS,
    sm: width >= SM,
    md: width >= MD,
    lg: width >= LG,
    xl: width >= XL,
    '2xl': width >= XXL,
  };
};

export default useBreakpoint;
