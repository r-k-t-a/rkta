import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Placeholder.type';

export const initialStyle = css`
  background-color: currentColor;
  border-radius: 3px;
  display: inline-block;
  pointer-events: none;
  height: 1em;
  user-select: none;
  opacity: 0.48;
  width: 100%;
`;

export const width = (theme: RktaTheme, props: Props): SerializedStyles => css`
  width: ${props.width};
`;
