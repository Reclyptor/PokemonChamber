export const capitalize = (str?: string): string => {
  if (!str) {
    return '';
  }
  return `${ str.charAt(0).toLocaleUpperCase()}${str.slice(1)}`;
};

export const ellipsify = (length: number, str?: string): string => {
  if (!str || !length) {
    return '';
  }
  return str.length <= length ? str : `${str.slice(0, Math.max(length - 3, 0))}...`;
};

export const repeat = (count: number, str?: string, separator?: string): string => {
  if (!str || count < 0) {
    return '';
  }
  return count > 0 ? `${str}${separator || ''}${repeat(count - 1, str, separator)}` : str;
};

export const initials = (name?: string): string => {
  if (!name) {
    return '';
  }
  const [first, last] = name?.replace(/\s+/g, ' ')?.split(' ') || [];
  return `${first?.charAt(0)?.toUpperCase() || ''}${last?.charAt(0)?.toUpperCase() || ''}`;
};

export const loremIpsum = (): string => {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec leo consequat, auctor enim sed, vestibulum sapien. Sed luctus lobortis justo, sit amet dictum risus iaculis nec. Duis augue tortor, dapibus in leo non, aliquam hendrerit neque. Duis risus justo, sagittis ut laoreet vel, tempus et diam. Aenean ultricies non risus vitae iaculis. Curabitur semper diam vitae sapien tempor auctor. Nullam pulvinar quam lectus, et dapibus turpis sollicitudin non. Vivamus felis lectus, scelerisque id scelerisque at, posuere eu augue. Sed ac elementum mauris, ac malesuada quam. Proin ut fermentum diam.';
};
