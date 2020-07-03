import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme, RktaElement } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { FloatingAreaProps } from './FloatingArea.type';
import { ACTIVE } from './useFloatingArea';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

export const initialStyle = css`
  position: fixed;
  visibility: hidden;
  visibility: visible;
  transition: transform 0.48s ${ease};
  will-change: transform;
  > * {
    transition: transform 0.48s ${ease};
    will-change: transform;
  }
  z-index: 2040;
`;

export const blockLevel = (theme: RktaTheme, props: FloatingAreaProps): SerializedStyles => {
  if (props.producer) {
    const producer = props.producer as HTMLElement;

    return css`
      width: ${producer.offsetWidth}px;
    `;
  }

  return css`
    width: ${props.align === 'top' || props.align === 'bottom'
      ? window.innerWidth - props.offset * 2 + 'px'
      : 'auto'};
    height: ${props.align === 'top' || props.align === 'bottom'
      ? 'auto'
      : window.innerHeight - props.offset * 2 + 'px'};
  `;
};

export const phase = (theme: RktaTheme, props: FloatingAreaProps) => {
  const fx = props.phase === ACTIVE ? fxIn : fxOut;
  return css`
    > * {
      ${fx(props)}
    }
  `;
};
