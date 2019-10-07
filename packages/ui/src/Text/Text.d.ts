import { Color, RktaElement } from '../Provider/theme/theme.d';

export default interface Text extends RktaElement {
  /** One of theme colors or CSS Value: Color. */
  color?: Color;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  body?: boolean;
  body2?: boolean;
  button?: boolean;
  caption?: boolean;
  overline?: boolean;

  serif?: boolean;
  monospace?: boolean;
  uppercase?: boolean;
  /** Resets margins and paddings, useful for headers. */
  baseline?: boolean;
  muted?: boolean;
  center?: boolean;
  /** Adds subtle shadow around text. */
  etched?: boolean;
  /** disables user select. */
  readOnly?: boolean;
  nowrap?: boolean;
  /** force wrap long lines. */
  wrapLongLines?: boolean;
  hyphens?: boolean;
}
