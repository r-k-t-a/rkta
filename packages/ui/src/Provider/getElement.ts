import { ElementType } from 'react';

export interface ElementResolverProps {
  href?: string;
}

export type ElementResolverFunction = (
  element: ElementType,
  props: ElementResolverProps,
) => ElementType;

export const getElement: ElementResolverFunction = (element, { href }): ElementType =>
  href ? 'a' : element;
