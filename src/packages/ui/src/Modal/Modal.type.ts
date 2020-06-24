import { ReactNode } from 'react';
import { Align } from '../Backdrop/Backdrop.type';

export type Props = Align & {
  children?: ReactNode;
  close?: never;
  visible: boolean;
  onClose?(): void;
};
