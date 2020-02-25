import { SerializedStyles } from '@emotion/core';
import { Align } from './Backdrop.type';

import { leaveTop, leaveRight, leaveLeft, leaveBottom } from './fx';

export function fxOut({ align }: Align): SerializedStyles {
  switch (align) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
    default:
      return leaveBottom;
    case 'left':
      return leaveLeft;
    case 'right':
      return leaveRight;
    case 'top':
    case 'topLeft':
    case 'topRight':
      return leaveTop;
  }
}
