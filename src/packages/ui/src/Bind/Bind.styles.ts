import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { Props } from './Bind.type';
import { Bounds } from './Bind.styles.type';

export const initialStyle = css`
  position: fixed;
  transition: left 0.48s ease, top 0.48s ease, transform 0.48s ease;
  will-change: left, top, transform;
  z-index: 2040;
`;

export const fx = (theme: RktaTheme, props: Props): SerializedStyles => {
  const fxFunc = props.fx === 'in' ? fxIn : fxOut;
  return css`
    > * {
      ${fxFunc(props)}
    }
  `;
};

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
    case 'topLeft':
      return css`
        left: ${left}px;
        top: ${top - offset}px;
        transform: translateY(-100%);
      `;
    case 'topRight':
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
    case 'bottomLeft':
      return css`
        left: ${left}px;
        top: ${bottom + offset}px;
      `;
    case 'bottomRight':
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
