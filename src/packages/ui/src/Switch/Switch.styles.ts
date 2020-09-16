import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme, Color } from '../Provider';
import { easeInOutQuint } from '../util/cssEasingFunctions';

type Props = { padding: string; ratio: number; size: string };

export const initialStyle = (
  theme: RktaTheme,
  { padding, ratio, size }: Props,
): SerializedStyles => css`
  -webkit-appearance: none;
  -mox-appearance: none;
  appearance: none;
  border: ${padding} solid ${theme.color.divider};
  border-radius: ${size};
  background-color: ${theme.color.paper2};
  cursor: pointer;
  display: inline-block;
  height: ${size};
  padding: 0;
  position: relative;
  transition: background 0.4s ease, border 0.4s ${easeInOutQuint};
  will-change: background, border;
  width: calc(${size} * ${ratio});
  &:before {
    background-color: ${theme.color.paper};
    box-shadow: ${theme.shadow[1]};
    transition: transform 0.4s ${easeInOutQuint};
    will-change: transform;
    border-radius: inherit;
    display: block;
    height: calc(${size} - ${padding} * 2);
    width: calc(${size} - ${padding} * 2);
    content: '';
  }
  &:checked {
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};
    &:before {
      transform: translateX(calc(${size} * ${ratio - 1}));
    }
  }
`;

export const color = (
  theme: RktaTheme,
  props: { color: Color | string; on?: boolean },
): SerializedStyles => {
  const currenColor = theme.color[props.color] || props.color;
  return css`
    &:checked {
      background-color: ${currenColor};
      border-color: ${currenColor};
    }
  `;
};
