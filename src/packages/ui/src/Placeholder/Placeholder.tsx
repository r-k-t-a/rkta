import { ReactNode } from 'react';

import { Props } from './Placeholder.type';
import { makePlaceHolder } from '../util';

export const Placeholder = ({ children, size = 3, symbol }: Props): ReactNode => {
  if (children === undefined) return makePlaceHolder(symbol)(size);
  return children as JSX.Element;
};

Placeholder.defaultProps = {
  element: 'span',
};
