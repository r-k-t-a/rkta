import { css } from '@emotion/core';
import { CssEmotion, RktaTheme } from '../Provider/theme';

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
    will-change: transition;
  }
`;

export const active = (theme: RktaTheme, props: { active: boolean }): CssEmotion => css`
  .chevron {
    transform: rotate(${props.active ? 180 : 0}deg);
  }
`;

export const main = {
  flex: 1,
};
