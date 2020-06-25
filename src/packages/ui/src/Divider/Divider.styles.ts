import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { DividerProps } from './Divider.type';
import { cssUnitToString } from '../util';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border: 0;
  height: 0;
  border-top: 1px solid ${theme.color.divider};
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const dotted = css`
  border-style: dotted;
`;

export const fitAll = css`
  margin: 0;
`;

export const fitBottom = css`
  margin-bottom: 0;
`;

export const fitTop = css`
  margin-top: 0;
`;

export const inset = css`
  margin-left: 72px;
`;

export const invisible = css`
  visibility: hidden;
`;

export const horizontalSpace = (theme: RktaTheme, props: DividerProps): SerializedStyles => {
  const value = cssUnitToString(props.horizontalSpace);
  return css`
    margin-left: ${value};
    margin-right: ${value};
  `;
};

export const verticalSpace = (theme: RktaTheme, props: DividerProps): SerializedStyles => {
  const value = cssUnitToString(props.verticalSpace);
  return css`
    margin-bottom: ${value};
    margin-top: ${value};
  `;
};
