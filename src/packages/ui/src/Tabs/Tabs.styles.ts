import { css, SerializedStyles } from '@emotion/core';
import { Color, RktaTheme } from '../Provider/theme';
import { Indicator } from './useIndicator';
import { cssUnitToString } from '../util';

type IndicatorProps = {
  indicator: Indicator;
  overline?: boolean;
  vertical?: boolean;
};

export const initialStyle = css`
  position: relative;
  > * {
    border-radius: 0;
  }
`;

export const color = (theme: RktaTheme, { color: bgColor }: { color: Color }): SerializedStyles =>
  css`
    &:after {
      background-color: ${theme.color[bgColor] || bgColor};
    }
  `;

function getPlacement({
  indicator,
  indicatorSize = 2,
  overline,
  vertical,
}: {
  indicator: Indicator;
  indicatorSize?: number | string;
  overline?: boolean;
  vertical?: boolean;
}): SerializedStyles {
  const size = cssUnitToString(indicatorSize);
  if (overline && vertical)
    return css`
      flex-direction: column;
      &:after {
        left: 0;
        top: 0;
        transform: translateY(${indicator.top}px);
        height: ${indicator.height}px;
        width: ${size};
      }
    `;
  if (overline && !vertical)
    return css`
      &:after {
        height: ${size};
        left: 0;
        top: 0;
        transform: translateX(${indicator.left}px);
        width: ${indicator.width}px;
      }
    `;
  if (!overline && vertical)
    return css`
      flex-direction: column;
      &:after {
        height: ${indicator.height}px;
        right: 0;
        top: 0;
        transform: translateY(${indicator.top}px);
        width: 2px;
      }
    `;
  return css`
    &:after {
      bottom: 0;
      height: 2px;
      left: 0;
      transform: translateX(${indicator.left}px);
      width: ${indicator.width}px;
    }
  `;
}

export const indicator = (Theme: RktaTheme, props: IndicatorProps): SerializedStyles[] => [
  css`
    align-items: stretch;
    display: flex;
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      transition: transform 0.48s ease, width 0.48s ease;
      will-change: transform, width;
    }
  `,
  getPlacement(props),
];
