export const toMap = <T>(
  key: keyof T | ((_: T) => string | number),
): ((_: { [key: string | number]: T }, __: T) => { [key: string | number]: T }) => {
  return (accumulator: { [key: string | number]: T }, current: T) => {
    const index = typeof key === 'function' ? key(current) : current[key];
    if (typeof index === 'string' || typeof index === 'number') {
      accumulator[index] = current;
    }
    return accumulator;
  };
};

export const groupBy = <T>(
  key: keyof T | ((_: T) => string | number),
): ((_: { [key: string | number]: T[] }, __: T) => { [key: string | number]: T[] }) => {
  return (accumulator: { [key: string | number]: T[] }, current: T) => {
    const index = typeof key === 'function' ? key(current) : current[key];
    if (typeof index === 'string' || typeof index === 'number') {
      if (!accumulator[index]) {
        accumulator[index] = [current];
      } else {
        accumulator[index].push(current);
      }
    }
    return accumulator;
  };
};

export const partition = <T>(predicate: (_: T) => boolean): ((_: [T[], T[]], __: T) => [T[], T[]]) => {
  return (accumulator: [T[], T[]], curr: T) => {
    if (predicate(curr)) {
      accumulator[0].push(curr);
    } else {
      accumulator[1].push(curr);
    }
    return accumulator;
  };
};
