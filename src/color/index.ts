import colors from './colors.json';

export const color = (key: string): string => {
  return (colors as { [key: string]: string })?.[key] || '#000000';
};

export const parseColor = (name: string): string => {
  return color(name?.split('-')?.slice(1)?.join('-'));
};

export default colors as { [key: string]: string };
