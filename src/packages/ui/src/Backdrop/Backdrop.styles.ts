import { css, keyframes, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { BackdropProps } from './Backdrop.type';

import { fxIn } from './fxIn';
import { fxOut } from './fxOut';

export const initialStyle = (theme: RktaTheme, props: BackdropProps): SerializedStyles => css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  :before {
    content: '';
    background-color: #000;
    opacity: ${props.opacity};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  > * {
    cursor: auto;
    pointer-events: auto;
    position: relative;
  }
`;

export const align = (theme: RktaTheme, props: BackdropProps): SerializedStyles => {
  switch (props.align) {
    case 'bottom':
      return css`
        align-items: flex-end;
        justify-content: center;
      `;
    case 'bottom-right':
      return css`
        align-items: flex-end;
        justify-content: flex-end;
      `;
    case 'bottom-left':
      return css`
        align-items: flex-end;
        justify-content: flex-start;
      `;
    case 'left':
      return css`
        align-items: center;
        justify-content: flex-start;
      `;
    case 'right':
      return css`
        align-items: center;
        justify-content: flex-end;
      `;
    case 'top':
      return css`
        align-items: flex-start;
        justify-content: center;
      `;
    case 'top-left':
      return css`
        align-items: flex-start;
        justify-content: flex-start;
      `;
    case 'top-right':
      return css`
        align-items: flex-start;
        justify-content: flex-end;
      `;
    default:
      throw new Error('Unknown align value');
  }
};

export const fadeIn = (theme: RktaTheme, props: BackdropProps): SerializedStyles => {
  const Animation = keyframes`
    from { opacity: 0 }
    to { opacity: ${props.opacity} }
  `;
  return css`
    :before {
      animation: ${Animation} 1.2s ease forwards;
      will-change: opacity;
    }
    > * {
      ${fxIn(props)}
    }
  `;
};
export const fadeOut = (theme: RktaTheme, props: BackdropProps): SerializedStyles => {
  const Animation = keyframes`
    to { opacity: 0 }
  `;
  return css`
    :before {
      animation: ${Animation} 0.4s ease forwards;
      will-change: opacity;
    }
    > * {
      ${fxOut(props)}
      pointer-events: none;
    }
  `;
};

export const onClick = css`
  cursor: pointer;
`;
