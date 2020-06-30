import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { BindProps } from './Bind.type';
import { VISIBLE } from './useBind';

type Bounds = BindProps & {
  bounds: DOMRect;
};

export const initialStyle = css`
  position: fixed;
  transition: left 0.48s cubic-bezier(0.23, 1, 0.32, 1), top 0.48s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: left, top, transform;
  z-index: 2040;
`;

export const fx = (theme: RktaTheme, props: BindProps): SerializedStyles => {
  if (props.fx === VISIBLE)
    return css`
      > * {
        ${fxIn(props)}
      }
    `;
  return css`
    pointer-events: none;
    > * {
      ${fxOut(props)}
    }
  `;
};

export const blockLevel = (theme: RktaTheme, { bounds }: Bounds): SerializedStyles => css`
  width: ${bounds.width}px;
`;

export const bounds = (
  theme: RktaTheme,
  { align, offset = 0, bounds: target }: Bounds,
): SerializedStyles => {
  const { bottom, height, left, right, top, width } = target;
  switch (align) {
    case 'top':
      return css`
        left: ${left + width / 2}px;
        top: ${top - offset}px;
        transform: translate(-50%, -100%);
      `;
    case 'top-left':
      return css`
        left: ${left}px;
        top: ${top - offset}px;
        transform: translateY(-100%);
      `;
    case 'top-right':
      return css`
        left: ${right}px;
        top: ${top - offset}px;
        transform: translate(-100%, -100%);
      `;
    case 'right':
      return css`
        left: ${right + offset}px;
        top: ${top + height / 2}px;
        transform: translateY(-50%);
      `;
    case 'left':
      return css`
        left: ${left - offset}px;
        top: ${top + height / 2}px;
        transform: translate(-100%, -50%);
      `;
    case 'bottom-left':
      return css`
        left: ${left}px;
        top: ${bottom + offset}px;
      `;
    case 'bottom-right':
      return css`
        left: ${right}px;
        top: ${bottom + offset}px;
        transform: translateX(-100%);
      `;
    case 'bottom':
    default:
      return css`
        left: ${left + width / 2}px;
        top: ${bottom + offset}px;
        transform: translateX(-50%);
      `;
  }
};
