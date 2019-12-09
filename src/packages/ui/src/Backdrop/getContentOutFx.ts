import { SerializedStyles } from '@emotion/core';
import { Props } from './Backdrop.type';

import { modalTopLeave, modalRightLeave, modalLeftLeave, modalBottomLeave } from './fx';

export function getContentOutFx({ align }: Props): SerializedStyles {
  switch (align) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
    default:
      return modalBottomLeave;
    case 'left':
      return modalLeftLeave;
    case 'right':
      return modalRightLeave;
    case 'top':
    case 'topLeft':
    case 'topRight':
      return modalTopLeave;
  }
}
