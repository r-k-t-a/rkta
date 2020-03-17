import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Input.type';

export const initialStyle = css`
  align-items: center;
  display: flex;
`;

export const fancy = (theme: RktaTheme, props: Props): SerializedStyles => css`
  position: relative;
  &:before {
    background-color: currentColor;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    right: 0;
    opacity: 0.48;
    position: absolute;
  }
  &:after {
    background-color: currentColor;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    right: 0;
    position: absolute;
    transform: scaleX(${props.active ? 1 : 0});
    transition: transform 0.32s ease;
  }
`;

export const main = css`
  flex: 1;
`;
