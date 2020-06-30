import { css, SerializedStyles } from '@emotion/core';

import { RktaTheme } from '../Provider/theme';
import { fxIn } from '../Backdrop/fxIn';
import { fxOut } from '../Backdrop/fxOut';
import { FloatingAreaProps } from './FloatingArea.type';
import { ACTIVE, EXITING } from './useFloatingArea';

export const initialStyle = css`
  position: fixed;
  > * {
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform;
  }
  z-index: 2040;
`;

export const transition = css`
  transition: left 0.48s cubic-bezier(0.23, 1, 0.32, 1), top 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: left, top, transform;
`;

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

export const blockLevel = css`
  width: 100%;
`;
