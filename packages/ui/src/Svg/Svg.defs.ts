import { AtomProps } from '../Atom/Atom.defs';

export interface SvgProps extends AtomProps {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
}
