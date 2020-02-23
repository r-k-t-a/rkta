import { ReactNode, HTMLProps } from 'react';
import { AddonOwnProps } from '../Addon/Addon.type';

export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export interface Props extends AddonOwnProps, HTMLProps<InputElement> {
  active?: boolean;
  autoHeight?: boolean;
  caption?: ReactNode;
  maxRows?: number;
  multiline?: boolean;
}
