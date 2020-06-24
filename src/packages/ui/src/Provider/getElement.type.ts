import { ElementType } from 'react';

export type ElementResolverProps = {
  href?: string;
};

export type Resolver = (element: ElementType, props: ElementResolverProps) => ElementType;
