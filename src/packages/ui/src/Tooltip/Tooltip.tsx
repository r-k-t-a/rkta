import React, { cloneElement, FC } from 'react';

import { TooltipProps } from './Tooltip.type';
import { useTooltip } from './useTooltip';
import { FloatingArea } from '../FloatingArea';
import { useProviderContext } from '../Provider';

const defaultAlign = 'bottom';
const defaultOffset = 8;

/**
 * ```js
 * import { Tooltip } from '@rkta/ui';
 * <Tooltip align="top" content="A hint">
 *   <Button>Buton</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip: FC<TooltipProps> = ({
  align,
  children: Trigger,
  content,
  offset,
  ...rest
}) => {
  const { applyStyles } = useProviderContext();
  const tooltipProps = { bgColor: 'text', color: 'paper', caption: true, ...rest };
  const [nextProps, Element] = applyStyles(tooltipProps, 'Tooltip', 'Paper', 'Text');
  const { isVisible, hide, show, producer } = useTooltip();

  return (
    <>
      {cloneElement(Trigger, {
        onContextMenu(event: MouseEvent) {
          event.preventDefault();
        },
        onMouseOver: show,
        onMouseOut: hide,
        onTouchCancel: hide,
        onTouchEnd: hide,
        onTouchStart: show,
      })}
      {producer && (
        <FloatingArea
          active={isVisible}
          align={align}
          offset={offset}
          onClose={hide}
          producer={producer as HTMLElement}
        >
          <Element {...nextProps}>{content}</Element>
        </FloatingArea>
      )}
    </>
  );
};

Tooltip.defaultProps = {
  align: defaultAlign,
  offset: defaultOffset,
};
