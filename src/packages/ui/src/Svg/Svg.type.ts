import { SVGAttributes } from 'react';
import { RktaElement } from '../Provider/theme';

export type Props = {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
} & SVGAttributes<SVGElement> &
  RktaElement;
