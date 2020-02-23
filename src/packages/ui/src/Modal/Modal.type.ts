import { ReactNode } from 'react';
import { Align } from '../Backdrop/Backdrop.type';

export interface Props extends Align {
  children?: ReactNode;
  close?: never;
  visible: boolean;
  onClose?(): void;
}
