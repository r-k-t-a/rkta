import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme, Color } from '../Provider';
import { cssUnitToString } from '../util';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border-radius: 24px;
  display: inline-block !important;
  cursor: pointer;
  height: 24px;
  padding: 0;
  transition: background 0.4s ease, border 0.4s ease;
  will-change: background, border;
  width: 40px;
  > span {
    background-color: ${theme.color.paper};
    box-shadow: ${theme.shadow[1]};
    border-radius: 22px;
    transition: transform 0.4s ease;
    will-change: transform;
    display: block;
    height: 22px;
    width: 22px;
  }
`;

export const color = (
  theme: RktaTheme,
  props: { color: Color; on?: boolean },
): SerializedStyles => css`
  border: 1px solid ${props.on ? theme.color[props.color] : theme.color.divider};
  background-color: ${props.on ? theme.color[props.color] : theme.color.paper};
`;

export const on = css`
  > span {
    transform: translateX(16px);
  }
`;

export const size = (theme: RktaTheme, props: { size: number | string }): SerializedStyles => {
  const s = cssUnitToString(props.size);
  return css`
    height: ${s};
    width: calc(${s} + 16px);
    > span {
      height: calc(${s} - 2px);
      width: calc(${s} - 2px);
    }
  `;
};
