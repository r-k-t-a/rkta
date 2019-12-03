import { CssEmotion, RktaTheme } from '../Provider/theme/theme.type';
import { Props } from './Modal.type';

import {
  modalTopEnter,
  modalTopLeave,
  modalRightEnter,
  modalRightLeave,
  modalLeftEnter,
  modalLeftLeave,
  modalBottomEnter,
  modalBottomLeave,
} from './fx';

function getFx({ align, isClosing }: Props): CssEmotion {
  switch (align) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
    default:
      return isClosing ? modalBottomLeave : modalBottomEnter;
    case 'left':
      return isClosing ? modalLeftLeave : modalLeftEnter;
    case 'right':
      return isClosing ? modalRightLeave : modalRightEnter;
    case 'top':
    case 'topLeft':
    case 'topRight':
      return isClosing ? modalTopLeave : modalTopEnter;
  }
}

export const initialStyle = (theme: RktaTheme, props: Props): CssEmotion => getFx(props);
