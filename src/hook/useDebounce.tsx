import React, { useRef } from 'react';

const useDebounce = (fn: (...args: any) => void, timeout = 500) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return (...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => fn(...args), timeout);
    return () => clearTimeout(timer.current);
  };
};

export default useDebounce;
