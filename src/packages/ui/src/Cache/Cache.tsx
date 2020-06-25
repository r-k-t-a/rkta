import React, { ReactNode } from 'react';
import { CacheProps } from './Cache.type';

export class Cache extends React.Component<CacheProps> {
  shouldComponentUpdate({ disabled = false }: CacheProps): boolean {
    return disabled;
  }

  public render(): ReactNode {
    return this.props.children;
  }
}
