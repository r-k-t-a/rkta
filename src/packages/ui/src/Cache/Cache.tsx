import React, { ReactNode } from 'react';
import { Props } from './Cache.type';

export type CacheProps = Props;
export class Cache extends React.Component<Props> {
  shouldComponentUpdate({ disabled = false }: Props): boolean {
    return disabled;
  }

  public render(): ReactNode {
    return this.props.children;
  }
}
