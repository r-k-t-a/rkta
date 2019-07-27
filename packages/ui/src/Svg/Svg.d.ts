import { AtomProps } from '../Atom/Atom.d';

export interface SvgProps extends AtomProps {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
}
