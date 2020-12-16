import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { SelectProps } from './Select.type';

export const initialStyle = css`
  align-items: center;
  display: flex;
  padding: 0;
  position: relative;
  .chevron {
    transition: transform 0.4s ease;
  }
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const active = (theme: RktaTheme, props: SelectProps): SerializedStyles => css`
  .chevron {
    transform: rotate(${props.active ? 180 : 0}deg);
  }
`;

export const main = css`
  flex: 1;
`;
