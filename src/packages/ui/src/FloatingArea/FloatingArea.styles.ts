import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { FloatingAreaProps } from './FloatingArea.type';
import { ACTIVE } from './useFloatingArea';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

export const initialStyle = css`
  position: fixed;
  > * {
    transition: transform 0.48s ${ease};
    will-change: transform;
  }
  z-index: 2040;
`;

export const blockLevel = (theme: RktaTheme, props: FloatingAreaProps): SerializedStyles => {
  return css`
    width: 100%;
  `;
};

export const phase = (theme: RktaTheme, props: FloatingAreaProps): SerializedStyles => {
  if (props.phase === ACTIVE)
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

export const transition = css`
  transition: transform 0.48s ${ease};
  will-change: transform;
`;
