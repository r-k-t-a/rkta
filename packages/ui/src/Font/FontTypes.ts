import React from 'react';
import { CssType } from '../Provider/theme/themedTypes';

export interface FontThemeDefs {
  color: { [key: string]: string };
}

export interface FontProps {
  children: React.ReactNode;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  css?: CssType;
  element?: React.ElementType;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
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
  noselect?: boolean;
  nowrap?: boolean;
  /** force wrap long lines. */
  wrap?: boolean;
  hyphens?: boolean;
}

interface FontTextStyles {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
}

export interface FontStyleInterface {
  initialStyle: (theme: FontThemeDefs, props: FontProps) => CssType;

  serif: { fontFamily: string };
  monospace: { fontFamily: string };
  uppercase: { textTransform: string; letterSpacing: string };
  baseline: { margin: number; padding: number };
  muted: { opacity: string; userSelect: string };
  center: { textAlign: string };
  etched: { textShadow: string };
  noselect: { userSelect: string };
  nowrap: { whiteSpace: string; textOverflow: string; overflow: string };
  wrap: { overflowWrap: string; wordWrap: string };
  hyphens: { hyphens: string };
  h1: FontTextStyles;
  h2: FontTextStyles;
  h3: FontTextStyles;
  h4: FontTextStyles;
  h5: FontTextStyles;
  h6: FontTextStyles;
  subtitle1: FontTextStyles;
  subtitle2: FontTextStyles;
  body2: FontTextStyles;
  button: FontTextStyles;
  caption: FontTextStyles;
  overline: FontTextStyles;
  [key: string]: object;
}
