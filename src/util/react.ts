import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export const findByType = (children: ReactNode, type: string) => {
  return React.Children.map(
    children,
    (child) =>
      React.isValidElement(child) &&
      typeof child.type !== 'string' &&
      child.type.name === type &&
      child,
  )?.filter((child) => !!child);
};

export const excludeByType = (children: ReactNode, type: string) => {
  return React.Children.map(
    children,
    (child) =>
      React.isValidElement(child) &&
      (typeof child.type === 'string' || child.type.name !== type) &&
      child,
  )?.filter((child) => !!child);
};

export const findChildrenByType = (children: ReactNode, type: string) => {
  return findByType(children, type)?.flatMap(({ props }) => props.children);
};

export const nodeToElement = (children: ReactNode): HTMLElement => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(children);
  return div;
};
