import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../../Provider';

export const initialStyle = css`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

export const overline = (theme: RktaTheme): SerializedStyles => css`
  border-top: 1px solid ${theme.color.divider};
`;
export const underline = (theme: RktaTheme): SerializedStyles => css`
  border-bottom: 1px solid ${theme.color.divider};
`;
