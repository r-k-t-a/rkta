import React, { cloneElement, FC, MouseEvent } from 'react';

import { PopoverProps } from './Popover.type';
import { usePopover } from './usePopover';
import { Bind } from '../Bind';

const defaultAlign = 'bottom';
const defaultOffset = 0;

/**
 * ```js
 * import { Popover, Button, List, ListTitle, ListButton } from '@rkta/ui';
 *
 * {() => {
 *   const dropDownContent = (
 *     <List rize={2}>
 *       <ListTitle>Popover</ListTitle>
 *       <ListButton>Click me</ListButton>
 *       <ListButton>No, me!</ListButton>
 *     </List>
 *   )
 *   return (
 *     <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
 *       <Popover align="top">
 *         <Button bgColor="primary">top</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="topLeft">
 *         <Button bgColor="primary">topLeft</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="topRight">
 *         <Button bgColor="primary">topRight</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="right">
 *         <Button bgColor="primary">right</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="bottom">
 *         <Button bgColor="primary">bottom</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="bottomRight">
 *         <Button bgColor="primary">bottomRight</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="bottomLeft">
 *         <Button bgColor="primary">bottomLeft</Button>
 *         {dropDownContent}
 *       </Popover>
 *       <Popover align="left">
 *         <Button bgColor="primary">left</Button>
 *         {dropDownContent}
 *       </Popover>
 *     </div>
 *   );
 * }}
 * ```
 */
export const Popover: FC<PopoverProps> = ({
  align,
  children: [Trigger, ...restChildren],
  offset,
  ...rest
}): JSX.Element => {
  const { isVisible, hide, setTriggerElement, toggle, triggerElement } = usePopover();

  const EnhacedTrigger = cloneElement(Trigger, {
    onClick: (event: MouseEvent): void => {
      setTriggerElement(event.target as Element);
      if (!isVisible) toggle();
    },
  });
  return (
    <>
      {EnhacedTrigger}
      {triggerElement && (
        <Bind
          {...rest}
          align={align}
          onHide={hide}
          offset={offset}
          to={triggerElement}
          visible={isVisible}
        >
          {restChildren}
        </Bind>
      )}
    </>
  );
};

Popover.defaultProps = {
  align: defaultAlign,
  offset: defaultOffset,
};
