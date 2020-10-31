import { ReactNode, HTMLProps } from 'react';
import { AddonOwnProps } from '../Addon/Addon.type';

type Input = HTMLProps<InputElement>;

export type Value = Input['value'];

export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export type InputBaseProps = AddonOwnProps &
  Input & {
    active?: boolean;
    autoHeight?: boolean;
    caption?: ReactNode;
    maxRows?: number;
    multiline?: boolean;
    defaultValue?: Value;
    value?: Value;
  };
