import { FormEvent, ReactNode } from 'react';
import { AddonOwnProps } from '../Addon/Addon.type';

export type InputElement = HTMLInputElement | HTMLTextAreaElement;
export interface Props extends AddonOwnProps {
  active?: boolean;
  autoHeight?: boolean;
  autoComplete?: string;
  caption?: ReactNode;
  disabled?: boolean;
  maxRows?: number;
  multiline?: boolean;
  name?: string;
  onBlur?: (event: FormEvent<InputElement>) => void;
  onChange?: (event: FormEvent<InputElement>) => void;
  onFocus?: (event: FormEvent<InputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}
