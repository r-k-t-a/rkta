import { ModalProps } from '../Modal/Modal.type';
import { PaperProps } from '../Paper/Paper.type';

export type DrawerProps = ModalProps &
  PaperProps & {
    align: 'left' | 'top' | 'right' | 'bottom';
    open: boolean;
  };
