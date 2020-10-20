/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Modal } from '../Modal';
import { DrawerProps } from './Drawer.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 * import { Drawer } from '@rkta/ui';
 *
 * <Drawer align={align} onClose={handleClose} open={isOpen}>
 *   ...
 * </Drawer>
 * ```
 */
export const Drawer: FC<DrawerProps> = ({
  align = 'bottom',
  children,
  close,
  onClose,
  open,
  ...rest
}): JSX.Element => {
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
