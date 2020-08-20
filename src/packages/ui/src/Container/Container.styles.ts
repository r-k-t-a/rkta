/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { ContainerProps } from './Container.type';

export const initialStyle = css`
  box-sizing: border-box;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
`;
export const disableGutters = css`
  padding-left: 0;
  padding-right: 0;
`;

const getWidth = ({ breakpoint }: RktaTheme, width: string): string =>
  width in breakpoint ? `${breakpoint[width]}px` : width;

export const fixed = (theme: RktaTheme, props: ContainerProps): SerializedStyles => css`
  min-width: ${getWidth(theme, props.maxWidth!)};
`;

export const maxWidth = (theme: RktaTheme, props: ContainerProps): SerializedStyles => css`
  max-width: ${getWidth(theme, props.maxWidth!)};
`;
