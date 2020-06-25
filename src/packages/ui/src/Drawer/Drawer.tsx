import React, { FC } from 'react';
import { Modal } from '../Modal';
import { DrawerProps } from './Drawer.type';
import { useProviderContext } from '../Provider';

export const Drawer: FC<DrawerProps> = ({
  align = 'bottom',
  children,
  close,
  onClose,
  open,
  ...rest
}: DrawerProps): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(
    { align, element: 'div', hard: true, rize: 2, ...rest },
    'Drawer',
    'Paper',
    'Text',
  );
  return (
    <Modal align={align} close={close} onClose={onClose} visible={open}>
      <Element {...nextProps}>{children}</Element>
    </Modal>
  );
};
