import { FC } from 'react';
import { Props } from './Placeholder.type';
import { makePlaceHolder } from '../util';

export const Placeholder: FC<Props> = ({ children, size = 3, symbol }: Props): JSX.Element => {
  const result = children === undefined ? makePlaceHolder(symbol)(size) : children;
  return result as JSX.Element;
};

Placeholder.defaultProps = {
  element: 'span',
};
