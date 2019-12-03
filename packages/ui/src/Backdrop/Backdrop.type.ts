import { ReactNode } from 'react';

export interface Props {
  align?:
    | 'center'
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'right'
    | 'bottom'
    | 'bottomRight'
    | 'bottomLeft'
    | 'left';
  children: ReactNode;
  close(): void;
  invisible?: boolean;
  isClosing: boolean;
  onClose(): void;
}
