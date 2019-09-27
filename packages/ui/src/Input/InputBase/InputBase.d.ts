import { ReactNode, HTMLProps } from 'react';

import { AddonOwnProps } from '../../Addon/Addon.defs';

export interface InputBase extends AddonOwnProps, HTMLProps<HTMLInputElement> {
  active: boolean;
  big?: boolean;
  caption?: ReactNode;
  hasFocus: boolean;
  huge?: boolean;
  small?: boolean;
  tiny?: boolean;
}
