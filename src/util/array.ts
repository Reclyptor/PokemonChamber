export const isEmptyArray = (obj: any): boolean => {
  return Array.isArray(obj) && obj.length < 1;
};

export const intersperse = <T, U>(x: T, xs: U[] = []): (T | U)[] => {
  return xs.reduce(
    (acc, curr, idx) => (1 + idx === xs.length ? [...acc, curr] : [...acc, curr, x]),
    [] as (T | U)[],
  );
};

export const partition = <T>(xs: T[], predicate: (_: T) => boolean): [T[], T[]] => {
  return xs.reduce(
    (acc, curr) => {
      if (predicate(curr)) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[] as T[], [] as T[]],
  );
};

export const range = (end: number, startAt = 0): number[] => {
  return Array.from({ length: end }, (_, i) => i).filter((i) => i >= startAt);
};

export const sort = <T>(xs: T[] = [], sorts: { key: keyof T; asc: boolean }[] = []): T[] => {
  const sorted: T[] = [...xs];
  if (!sorts.length) {
    return sorted;
  }

  const compare = (x: T, y: T, [hd, ...tl]: { key: keyof T; asc: boolean }[] = []): number => {
    if (!hd) {
      return 0;
    }
    const { key, asc } = hd;
    const xValue = x[key],
      yValue = y[key];
    if (typeof xValue === 'number' && typeof yValue === 'number') {
      return (asc ? xValue - yValue : yValue - xValue) || compare(x, y, tl);
    }
    return (
      (asc
        ? String(xValue).localeCompare(String(yValue))
        : String(yValue).localeCompare(String(xValue))) || compare(x, y, tl)
    );
  };

  sorted.sort((x, y) => compare(x, y, sorts));

  return sorted;
};

export const unique = <T>(items: T[], key?: string): T[] => {
  const uniqueIds: T[] = [];
  return items.filter((element: T) => {
    const isDuplicate = uniqueIds.includes(
      // @ts-ignore
      key && typeof element !== 'string' ? element[key] : element,
    );
    if (!isDuplicate) {
      // @ts-ignore
      uniqueIds.push(key && typeof element !== 'string' ? element[key] : element);
      return true;
    }
    return false;
  });
};
