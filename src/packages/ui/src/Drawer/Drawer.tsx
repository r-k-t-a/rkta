import React, { FC } from 'react';
import { Modal } from '../Modal';
import { Props } from './Drawer.type';
import { useProviderContext } from '../Provider';

export type DrawerProps = Props;

export const Drawer: FC<Props> = ({
  align = 'bottom',
  children,
  close,
  onClose,
  open,
  ...rest
}: Props): JSX.Element => {
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
