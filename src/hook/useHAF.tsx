import { useEffect, useRef, useState } from 'react';

const useHAF = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (ref?.current) {
      ref.current.addEventListener('mouseenter', () => setHover(true));
      ref.current.addEventListener('mouseleave', () => setHover(false));
      ref.current.addEventListener('mousedown', () => setActive(true));
      ref.current.addEventListener('mouseup', () => setActive(false));
      ref.current.addEventListener('focus', () => setFocus(true));
      ref.current.addEventListener('blur', () => setFocus(false));
    }
  }, [ref]);

  return { ref, hover, active, focus };
};

export default useHAF;
