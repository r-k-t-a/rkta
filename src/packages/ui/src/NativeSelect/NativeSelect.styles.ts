import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { NativeSelectProps } from './NativeSelect.type';

export const initialStyle = css`
  align-items: center;
  display: flex;
  padding: 0;
  position: relative;
  select {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .chevron {
    transition: transform 0.4s ease;
  }
`;

export const active = (theme: RktaTheme, props: NativeSelectProps): SerializedStyles => css`
  .chevron {
    transform: rotate(${props.active ? 180 : 0}deg);
  }
`;

export const main = css`
  flex: 1;
`;
