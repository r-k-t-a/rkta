import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme, Color } from '../Provider';
import { easeInOutQuint } from '../util/cssEasingFunctions';

type Props = { padding: string; ratio: number; size: string };

const focus = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.24);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.24);
  }
  100% {
    transform: scale(1);
  }
`;

export const initialStyle = (
  theme: RktaTheme,
  { padding, ratio, size }: Props,
): SerializedStyles => {
  const beforeSize = `calc(${size} - ${padding} * 2)`;
  const afterSize = `calc(${size} * ${ratio})`;
  return css`
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
    width: ${afterSize};
    &:before {
      background-color: ${theme.color.paper};
      border-radius: inherit;
      box-shadow: ${theme.shadow[1]};
      content: '';
      display: block;
      height: ${beforeSize};
      transition: transform 0.4s ${easeInOutQuint};
      width: ${beforeSize};
      will-change: transform;
    }
    &:checked {
      background-color: ${theme.color.primary};
      border-color: ${theme.color.primary};
      &:before {
        transform: translateX(calc(${size} * ${ratio - 1}));
      }
    }
    &:after {
      background-color: ${theme.color.primary};
      border-radius: inherit;
      content: '';
      height: ${afterSize};
      left: 0;
      opacity: 0;
      position: absolute;
      transition: opacity 0.4s ease;
      top: calc((${size} - ${size} * ${ratio}) / 2 - ${padding});
      width: ${afterSize};
      will-change: opacity, transition;
    }
    &:focus {
      &:after {
        animation: ${focus} 0.9s ease infinite;
        opacity: 0.32;
      }
    }
  `;
};

export const color = (
  theme: RktaTheme,
  props: { color: Color | string; on?: boolean },
): SerializedStyles => {
  const currenColor = theme.color[props.color] || props.color;
  return css`
    color: ${currenColor};
    &:after {
      background-color: ${currenColor};
    }
    &:checked {
      background-color: ${currenColor};
      border-color: ${currenColor};
    }
  `;
};
