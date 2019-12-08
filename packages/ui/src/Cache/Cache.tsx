import React, { ReactNode } from 'react';

import { Props } from './Cache.type';

export class Cache extends React.Component<Props> {
  shouldComponentUpdate({ disabled = false }: Props): boolean {
    return disabled;
  }

  public render(): ReactNode {
    return this.props.children;
  }
}
