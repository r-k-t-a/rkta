import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { cssUnitToString } from '../util';
import { Props } from './Addon.type';

export const initialStyle = css`
  display: block;
  padding: 0 16px;
`;

export const big = css`
  min-height: 56px;
`;

export const fitAll = css`
  padding: 0;
`;

export const fitLeft = css`
  padding-left: 0;
`;

export const fitRight = css`
  padding-right: 0;
`;

export const huge = css`
  min-height: 64px;
`;

export const inset = css`
  padding-left: 72px;
`;

export const main = css`
  flex: 1;
`;

export const normal = css`
  min-height: 48px;
`;

export const paddingX = (theme: RktaTheme, props: Props): SerializedStyles => {
  const value = cssUnitToString(props.paddingX);
  return css`
    padding-left: ${value};
    padding-right: ${value};
  `;
};

export const paddingY = (theme: RktaTheme, props: Props): SerializedStyles => {
  const value = cssUnitToString(props.paddingY);
  return css`
    padding-top: ${value};
    padding-bottom: ${value};
  `;
};

export const small = css`
  min-height: 40px;
`;

export const tiny = css`
  min-height: 32px;
`;
