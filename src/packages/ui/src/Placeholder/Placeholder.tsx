import { FC } from 'react';
import { Props } from './Placeholder.type';
import { placeHolder } from '../util';

export const Placeholder: FC<Props> = ({ children, size = 3, symbol }: Props): JSX.Element => {
  const result = children === undefined ? placeHolder(size, symbol) : children;
  return result as JSX.Element;
};

Placeholder.defaultProps = {
  element: 'span',
};
