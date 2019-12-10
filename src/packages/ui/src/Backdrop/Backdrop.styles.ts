import { css, keyframes } from '@emotion/core';
import { CssEmotion, RktaTheme } from '../Provider/theme/theme.type';
import { Props } from './Backdrop.type';

import { getContentInFx } from './getContentInFx';
import { getContentOutFx } from './getContentOutFx';

export const initialStyle = (theme: RktaTheme, props: Props): CssEmotion => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ':before': {
    content: '""',
    backgroundColor: '#000',
    opacity: props.opacity,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  '>*': {
    cursor: 'auto',
    pointerEvents: 'auto',
    position: 'relative',
  },
});

export const align = (theme: RktaTheme, props: Props): CssEmotion => {
  switch (props.align) {
    case 'bottom':
      return {
        alignItems: 'flex-end',
        justifyContent: 'center',
      };
    case 'bottomRight':
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      };
    case 'bottomLeft':
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
      };
    case 'left':
      return {
        alignItems: 'center',
        justifyContent: 'flex-start',
      };
    case 'right':
      return {
        alignItems: 'center',
        justifyContent: 'flex-end',
      };
    case 'top':
      return {
        alignItems: 'flex-start',
        justifyContent: 'center',
      };
    case 'topLeft':
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      };
    case 'topRight':
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      };
    default:
      throw new Error('Unknown align value');
  }
};

export const fadeIn = (theme: RktaTheme, props: Props): CssEmotion => {
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
      ${getContentInFx(props)}
    }
  `;
};
export const fadeOut = (theme: RktaTheme, props: Props): CssEmotion => {
  const Animation = keyframes`
    to { opacity: 0 }
  `;
  return css`
    :before {
      animation: ${Animation} 0.4s ease forwards;
      will-change: opacity;
    }
    > * {
      ${getContentOutFx(props)}
      pointer-events: none;
    }
  `;
};

export const onClick: CssEmotion = {
  cursor: 'pointer',
};
