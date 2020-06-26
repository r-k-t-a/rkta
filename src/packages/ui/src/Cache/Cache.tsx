import React, { ReactNode } from 'react';
import { CacheProps } from './Cache.type';

export class Cache extends React.Component<CacheProps> {
  shouldComponentUpdate({ disabled = false }): boolean {
    return disabled;
  }

  public render(): ReactNode {
    return this.props.children;
  }
}
