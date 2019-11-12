/** @jsx jsx */
import { ReactNode, SFC, useContext } from 'react';
import { useTheme } from '@rkta/context';
import { jsx } from '@emotion/core';

interface CssProps {
  color?: string;
  inline?: boolean;
  size?: number | string;
}

interface Props extends CssProps {
  children: ReactNode;
}

interface Theme {
  color: { [key: string]: string };
}

const getCss = (theme: Theme, { inline = false, size = 24, color = '' }: CssProps) => [
  {
    display: 'block',
    fill: 'currentColor',
    height: size,
    verticalAlign: 'middle',
    width: size,
  },
  inline && {
    display: 'inline-block',
  },
  color && {
    fill: theme.color[color] || color,
  },
];

const TsElement: SFC<Props> = ({ children, ...rest }: Props): JSX.Element => {
  const theme = useTheme();
  const css = getCss(theme, rest);
  return <svg css={css}>{children}</svg>;
};

export default TsElement;
