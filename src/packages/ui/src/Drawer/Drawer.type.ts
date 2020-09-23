import { ModalProps } from '../Modal/Modal.type';
import { PaperProps } from '../Paper/Paper.type';

export type DrawerProps = Omit<ModalProps, 'visible'> &
  PaperProps & {
    align: 'left' | 'top' | 'right' | 'bottom';
    open: boolean;
  };
