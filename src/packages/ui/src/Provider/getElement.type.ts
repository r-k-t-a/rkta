import { ElementType } from 'react';

export interface ElementResolverProps {
  href?: string;
}

export type Resolver = (element: ElementType, props: ElementResolverProps) => ElementType;
