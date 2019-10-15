import { ReactNode, HTMLProps } from 'react';

import { AddonOwnProps } from '../../Addon/Addon.type';

export interface Props extends AddonOwnProps, HTMLProps<HTMLInputElement> {
  active: boolean;
  big?: boolean;
  caption?: ReactNode;
  huge?: boolean;
  small?: boolean;
  tiny?: boolean;
}
