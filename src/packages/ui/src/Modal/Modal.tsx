/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { Cache } from '../Cache';

import { ModalProps } from './Modal.type';
import { useModal } from './useModal';
import { upsertNode } from '../util';

/**
 * ```js
 * import { Modal, Button, Paper,
 * Card, CardHeader, Cardbody, Cardfooter,
 * Addon, Popover, List, ListTitle, ListButton }
 * from '@rkta/ui';
 * import { DotsThreeVertical } from '@rkta/entypo';
 *
 *
 * {() => {
 *   const [visible, toggleVisible] = useToggle();
 *   const ok = flow(() => console.log('OK'), toggleVisible);
 *   return (
 *     <>
 *       <Button onClick={toggleVisible} bgColor="primary" rize={1}>
 *         Open modal
 *       </Button>
 *       <Modal css={{ padding: 40 }} onClose={toggleVisible} visible={visible} align="top">
 *         <Card rize={1} css={{ maxWidth: 560 }}>
 *           <CardHeader fitRight>
 *             CardHeader
 *              <Addon>
 *                <Popover align="bottomRight">
 *                 <Button round>
 *                   <DotsThreeVertical />
 *                 </Button>
 *                 <List rize={2}>
 *                   <ListTitle>Popover</ListTitle>
 *                   <ListButton nowrap>Menu option 1</ListButton>
 *                   <ListButton nowrap>Menu option 1</ListButton>
 *                 </List>
 *                </Popover>
 *              </Addon>
 *           </CardHeader>
 *           <CardBody color="textSecondary">
 *             <p>
 *             This impressive paella is a perfect party dish and a fun meal to cook together with your
 *             guests. Add 1 cup of frozen peas along with the mussels, if you like.
 *             </p>
 *             <p>
 *               Visible: {visible.toString()}
 *             </p>
 *           </CardBody>
 *           <CardFooter right>
 *             <Button onClick={toggleVisible}>Cancel</Button>
 *             <Button autoFocus bgColor="primary" onClick={ok} rize={2}>OK</Button>
 *           </CardFooter>
 *         </Card>
 *       </Modal>
 *     </>
 *   )
 * }}
 * ```
 */
export const Modal: FC<ModalProps> = forwardRef<HTMLElement, ModalProps>(
  ({ align, children, onClose, visible, ...rest }: ModalProps, ref): JSX.Element | null => {
    const defaultRef = useRef<HTMLElement>(null);
    const backdropRef = ref || defaultRef;
    const { backdropIsVisible, onBackdropFade, shouldRender } = useModal(visible);
    if (!shouldRender) return null;
    const element = upsertNode('ui-modal');
    return createPortal(
      <Backdrop
        {...rest}
        align={align}
        visible={backdropIsVisible}
        onClick={onClose}
        onFadeOut={onBackdropFade}
        ref={backdropRef}
      >
        <Cache disabled={visible}>{children}</Cache>
      </Backdrop>,
      element,
    );
  },
);
