import { ReactNode, HTMLProps } from 'react';

import { AddonOwnProps } from '../../Addon/Addon.d';

export interface InputBase extends AddonOwnProps, HTMLProps<HTMLInputElement> {
  active: boolean;
  big?: boolean;
  caption?: ReactNode;
  huge?: boolean;
  small?: boolean;
  tiny?: boolean;
}
