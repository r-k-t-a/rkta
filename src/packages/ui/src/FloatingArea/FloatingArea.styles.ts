import { css, SerializedStyles } from '@emotion/core';
import { getHTMLElementFromRef } from '@rkta/hooks';

import { RktaTheme } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { FloatingAreaProps } from './FloatingArea.type';
import { ENTER } from './useFloatingArea';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

export const initialStyle = css`
  position: fixed;
  visibility: hidden;
  z-index: 2040;
`;

export const animate = (theme: RktaTheme, props: FloatingAreaProps): SerializedStyles => {
  const fx = props.phase === ENTER ? fxIn : fxOut;
  return css`
    > * {
      ${fx(props)}
      transition: transform 0.48s ${ease};
      will-change: transform;
    }
  `;
};

export const blockLevel = (
  theme: RktaTheme,
  { align, offset = 0, producer }: FloatingAreaProps,
): SerializedStyles => {
  const producerElement = getHTMLElementFromRef(producer);

  const height = producerElement?.offsetHeight || window.innerHeight - offset * 2;
  const width = producerElement?.offsetWidth || window.innerWidth - offset * 2;

  switch (align) {
    case 'bottom-left':
    case 'bottom':
    case 'bottom-right':
    case 'top-left':
    case 'top':
    case 'top-right':
      return css`
        width: ${width}px;
      `;
    case 'left':
    case 'right':
      return css`
        height: ${height}px;
      `;
    default:
      return css`
        height: ${height}px;
        width: ${width}px;
      `;
  }
};

export const visible = css`
  transition: transform 0.48s ${ease};
  visibility: visible;
  will-change: transform;
`;
