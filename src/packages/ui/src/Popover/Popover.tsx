import React, { cloneElement, FC, MouseEvent } from 'react';

import { PopoverProps } from './Popover.type';
import { usePopover } from './usePopover';
import { FloatingArea } from '../FloatingArea';

const defaultAlign = 'bottom';
const defaultOffset = 0;

/**
 * ```js
 * import { Popover } from '@rkta/ui';
 * <Popover align="top">
 *   ...
 * </Popover>
 * ```
 */
export const Popover: FC<PopoverProps> = ({
  align,
  children: [Trigger, ...restChildren],
  disabled,
  offset,
  ...rest
}): JSX.Element => {
  const { isVisible, hide, setProducer, toggle, producer } = usePopover();

  const EnhacedTrigger = disabled
    ? Trigger
    : cloneElement(Trigger, {
        onClick: (event: MouseEvent): void => {
          setProducer(event.target as Element);
          if (!isVisible) toggle();
        },
      });
  return (
    <>
      {EnhacedTrigger}
      {producer && (
        <FloatingArea
          {...rest}
          active={isVisible}
          align={align}
          offset={offset}
          onClose={hide}
          producer={producer}
        >
          {restChildren}
        </FloatingArea>
      )}
    </>
  );
};

Popover.defaultProps = {
  align: defaultAlign,
  offset: defaultOffset,
};
