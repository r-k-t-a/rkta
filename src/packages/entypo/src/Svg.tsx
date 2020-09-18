/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { ReactNode, FC } from 'react';
import { useTheme } from '@rkta/context';
import { css, jsx, InterpolationWithTheme } from '@emotion/core';

type CssProps = {
  color?: string;
  inline?: boolean;
  size?: number | string;
};

type Props = CssProps & {
  children: ReactNode;
};

type Theme = {
  color: {
    [key: string]: string | number;
  };
};

const defaultSize = 20;

const getCss = (
  theme: Theme,
  { inline = false, size = defaultSize, color = '' }: CssProps,
): InterpolationWithTheme<any> => [
  css`
    display: block;
    fill: currentColor;
    height: ${size};
    width: ${size};
  `,
  inline &&
    css`
      display: inline-block;
      vertical-align: middle;
    `,
  color &&
    css`
      fill: ${(theme.color[color] || color) as string};
    `,
  size !== defaultSize &&
    css`
      margin: 2px;
    `,
];

const Svg: FC<Props> = ({ children, ...rest }: Props) => {
  const theme = useTheme<Theme>();
  return <svg css={getCss(theme, rest)}>{children}</svg>;
};

export default Svg;
