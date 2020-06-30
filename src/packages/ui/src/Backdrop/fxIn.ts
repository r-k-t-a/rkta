import { SerializedStyles } from '@emotion/core';
import { Align } from './Backdrop.type';

import { enterTop, enterRight, enterLeft, enterBottom } from './fx';

export function fxIn({ align }: Align): SerializedStyles {
  switch (align) {
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
    default:
      return enterBottom;
    case 'left':
      return enterLeft;
    case 'right':
      return enterRight;
    case 'top':
    case 'top-left':
    case 'top-right':
      return enterTop;
  }
}
