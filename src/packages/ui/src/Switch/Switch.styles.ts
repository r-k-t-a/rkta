import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme, Color } from '../Provider';
import { easeInOutQuint } from '../util/cssEasingFunctions';

type Props = { padding: string; ratio: number; size: string };

export const initialStyle = (
  theme: RktaTheme,
  { padding, ratio, size }: Props,
): SerializedStyles => css`
  appearance: none;
  background-color: ${theme.color.paper2};
  border: ${padding} solid ${theme.color.divider};
  border-radius: ${size};
  cursor: pointer;
  display: inline-block;
  height: ${size};
  outline: none;
  padding: 0;
  position: relative;
  transition: background 0.4s ease, border 0.4s ${easeInOutQuint};
  will-change: background, border;
  width: calc(${size} * ${ratio});
  &:before {
    background-color: ${theme.color.paper};
    border-radius: inherit;
    box-shadow: ${theme.shadow[1]};
    content: '';
    display: block;
    height: calc(${size} - ${padding} * 2);
    transition: transform 0.4s ${easeInOutQuint};
    width: calc(${size} - ${padding} * 2);
    will-change: transform;
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
