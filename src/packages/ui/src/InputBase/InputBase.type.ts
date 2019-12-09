import { FormEvent, HTMLProps, ReactNode } from 'react';
import { AddonOwnProps } from '../Addon/Addon.type';

export interface Props extends AddonOwnProps, HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  active?: boolean;
  autoheight?: boolean;
  caption?: ReactNode;
  disabled?: boolean;
  maxRows?: number;
  multiline?: boolean;
  onBlur?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}
