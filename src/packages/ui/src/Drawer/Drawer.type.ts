import { Props as ModalProps } from '../Modal/Modal.type';
import { Props as PaperProps } from '../Paper/Paper.type';

export interface Props extends ModalProps, PaperProps {
  align: 'left' | 'top' | 'right' | 'bottom';
  open: boolean;
}
