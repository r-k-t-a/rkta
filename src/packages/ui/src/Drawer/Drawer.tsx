import React, { FC } from 'react';
import { Modal } from '../Modal';
import { DrawerProps } from './Drawer.type';
import { useProviderContext } from '../Provider';

/**
 * ```js
 * import { Button, List, ListTitle, ListButton, Drawer } from '@rkta/ui';
 *
 * {() => {
 *   const [{ align, isOpen }, setState] = useState({});
 *   const makeHandler = align => () => setState(prevState => ({ align: align || prevState.align, isOpen: !prevState.isOpen }));
 *   return (
 *     <>
 *       <div style={{ display: 'flex', justifyContent: 'center', padding: `24px` }}>
 *         <Button rounded hardRight onClick={makeHandler('left')} bgColor="primary">Left</Button>
 *         <Button hard onClick={makeHandler('top')} bgColor="primary">Top</Button>
 *         <Button hard onClick={makeHandler('right')} bgColor="primary">Right</Button>
 *         <Button rounded hardLeft onClick={makeHandler('bottom')} bgColor="primary">Bottom</Button>
 *       </div>
 *       <Drawer align={align} onClose={makeHandler()} open={isOpen}>
 *         <List>
 *           <ListTitle>Drawer</ListTitle>
 *           <ListButton>Menu Item 1</ListButton>
 *           <ListButton>Menu Item 2</ListButton>
 *           <ListButton>Menu Item 3</ListButton>
 *           <ListButton>Menu Item 4</ListButton>
 *           <ListButton>Menu Item 5</ListButton>
 *         </List>
 *       </Drawer>
 *     </>
 *   );
 * }}
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
