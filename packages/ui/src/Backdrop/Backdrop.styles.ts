import { css, keyframes } from '@emotion/core';
import { CssEmotion, RktaTheme } from '../Provider/theme/theme.type';
import { Props } from './Backdrop.type';

export const initialStyle: CssEmotion = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  willChange: 'transition',
  zIndex: 1040,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ':before': {
    content: '""',
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  '>*': {
    cursor: 'auto',
    pointerEvents: 'auto',
  },
};

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

export const onClick: CssEmotion = {
  cursor: 'pointer',
};

export const visible: CssEmotion = (props: { visible: boolean }) => {
  const Animation = props.visible
    ? keyframes`
      from {
        transparency: 0;
      }
      to {
        transparency: 1;
      }
    `
    : keyframes`
      to {
        transparency: 0;
      }
    `;
  const delay = props.visible ? 1.2 : 0.4;
  console.log('visible', visible);
  return css`
    :before {
      animation: ${Animation} ${delay}s ease;
      will-change: transparency;
    }
  `;
};
