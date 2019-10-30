import { HTMLProps, ReactNode } from 'react';
import { AddonOwnProps } from '../../Addon/Addon.type';

export interface Props extends AddonOwnProps, HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  active?: boolean;
  autoheight?: boolean;
  caption?: ReactNode;
  multiline?: boolean;
}
