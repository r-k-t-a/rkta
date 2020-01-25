import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Divider.type';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border: 0;
  height: 0;
  border-top: 1px solid ${theme.color.divider};
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const dotted = css`
  border-style: 'dotted';
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
  margin-left: '72px';
`;

export const invisible = css`
  visibility: 'hidden';
`;

export const horizontalSpace = (theme: RktaTheme, props: Props): SerializedStyles => css`
  margin-left: ${props.horizontalSpace};
  margin-right: ${props.horizontalSpace};
`;

export const verticalSpace = (theme: RktaTheme, props: Props): SerializedStyles => css`
  margin-bottom: ${props.verticalSpace};
  margin-top: ${props.verticalSpace};
`;
