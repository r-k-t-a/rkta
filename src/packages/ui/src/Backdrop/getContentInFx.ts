import { SerializedStyles } from '@emotion/core';
import { Props } from './Backdrop.type';

import { modalTopEnter, modalRightEnter, modalLeftEnter, modalBottomEnter } from './fx';

export function getContentInFx({ align }: Props): SerializedStyles {
  switch (align) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
    default:
      return modalBottomEnter;
    case 'left':
      return modalLeftEnter;
    case 'right':
      return modalRightEnter;
    case 'top':
    case 'topLeft':
    case 'topRight':
      return modalTopEnter;
  }
}
