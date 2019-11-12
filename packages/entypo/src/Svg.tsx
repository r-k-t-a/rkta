/** @jsx jsx */
import { ReactNode, SFC, useContext } from 'react';
import { useTheme } from '@rkta/context';
import { css, jsx } from '@emotion/core';

interface Props {
  children: ReactNode;
  color?: string;
  inline?: boolean;
  size?: number | string;
}

interface Theme {
  color: { [key: string]: string };
}

const getCss = (theme: Theme, { inline = false, size = 24, color = '' }) => [
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
  const cssEmotion = getCss(rest, theme);
  return <svg css={cssEmotion}>{children}</svg>;
};

export default TsElement;
