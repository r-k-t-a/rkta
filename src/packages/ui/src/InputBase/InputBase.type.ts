import { ReactNode, HTMLProps } from 'react';
import { AddonOwnProps } from '../Addon/Addon.type';

export type Value = string | number | string[] | undefined;

export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export type InputBaseProps = AddonOwnProps &
  HTMLProps<InputElement> & {
    active?: boolean;
    autoHeight?: boolean;
    caption?: ReactNode;
    maxRows?: number;
    multiline?: boolean;
    defaultValue?: Value;
    value?: Value;
  };
