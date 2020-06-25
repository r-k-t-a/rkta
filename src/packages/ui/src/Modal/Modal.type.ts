import { ReactNode } from 'react';
import { Align } from '../Backdrop/Backdrop.type';

export type ModalProps = Align & {
  children?: ReactNode;
  close?: never;
  visible: boolean;
  onClose?(): void;
};
