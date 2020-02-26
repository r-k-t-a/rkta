import React, { cloneElement, FC, MouseEvent } from 'react';

import { Props } from './Popover.type';
import { usePopover } from './usePopover';
import { Bind } from '../Bind';

const defaultAlign = 'bottom';
const defaultOffset = 0;

export const Popover: FC<Props> = ({
  align,
  children: [Trigger, ...restChildren],
  offset,
  ...rest
}: Props): JSX.Element => {
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
