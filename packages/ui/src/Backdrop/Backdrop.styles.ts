import { CssRkta, RktaTheme } from '../Provider/theme/theme.type';
import { Props } from './Backdrop.type';

export * from './fx/backdropEnter';
export * from './fx/backdropLeave';

export const initialStyle: CssRkta = {
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  willChange: 'transition',
  zIndex: 1040,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ':focus': {
    outline: '20px dotted #fff',
  },
};

export const align = (theme: RktaTheme, props: Props): CssRkta => {
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

export const invisible: CssRkta = {
  animation: 'none !important',
  backgroundColor: 'rgba(0, 0, 0, 0) !important',
  pointerEvents: 'none',
  '>*': {
    pointerEvents: 'auto',
  },
};
