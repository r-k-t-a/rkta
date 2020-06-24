/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { ReactNode, FC } from 'react';
import { useTheme } from '@rkta/context';
import { jsx, InterpolationWithTheme } from '@emotion/core';

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

const getCss = (
  theme: Theme,
  { inline = false, size = 24, color = '' }: CssProps,
): InterpolationWithTheme<any> => [
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
    fill: (theme.color[color] || color) as string,
  },
];

const TsElement: FC<Props> = ({ children, ...rest }: Props): JSX.Element => {
  const theme = useTheme<Theme>();
  const css = getCss(theme, rest);
  return <svg css={css}>{children}</svg>;
};

export default TsElement;
