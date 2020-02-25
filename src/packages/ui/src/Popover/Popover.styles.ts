import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme } from '../Provider/theme';
import { Align } from './Popover.type';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { FX_LEAVE } from './useFsm';

export const initialStyle = css`
  position: fixed;
  transition: top 0.48s ease;
  will-change: top;
  z-index: 10;
`;

export const fxState = (
  theme: RktaTheme,
  props: { align: Align; fxState: symbol },
): SerializedStyles => {
  const fx = props.fxState === FX_LEAVE ? fxOut : fxIn;
  return css`
    > * {
      ${fx(props)}
    }
  `;
};

export const triggerBounds = (
  theme: RktaTheme,
  props: { align: string; triggerBounds: DOMRect; offset: number },
): SerializedStyles => {
  const { bottom, height, left, right, top, width } = props.triggerBounds;
  // console.log('right', { height, left, right, top, width });
  switch (props.align) {
    case 'top':
      return css`
        left: ${left + width / 2}px;
        top: ${top - props.offset}px;
        transform: translate(-50%, -100%);
      `;
    case 'topLeft':
      return css`
        left: ${left}px;
        top: ${top - props.offset}px;
        transform: translateY(-100%);
      `;
    case 'topRight':
      return css`
        left: ${right}px;
        top: ${top - props.offset}px;
        transform: translate(-100%, -100%);
      `;
    case 'right':
      return css`
        left: ${right + props.offset}px;
        top: ${top + height / 2}px;
        transform: translateY(-50%);
      `;
    case 'left':
      return css`
        left: ${left - props.offset}px;
        top: ${top + height / 2}px;
        transform: translate(-100%, -50%);
      `;
    case 'bottomLeft':
      return css`
        left: ${left}px;
        top: ${bottom + props.offset}px;
      `;
    case 'bottomRight':
      return css`
        left: ${right}px;
        top: ${bottom + props.offset}px;
        transform: translateX(-100%);
      `;
    case 'bottom':
    default:
      return css`
        left: ${left + width / 2}px;
        top: ${bottom + props.offset}px;
        transform: translateX(-50%);
      `;
  }
};
