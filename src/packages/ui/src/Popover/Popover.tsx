/* eslint-disable react/jsx-fragments */
import React, { cloneElement, FC, Fragment, useRef, useEffect } from 'react';
import useClickAway from 'react-use/lib/useClickAway';

import { Props } from './Popover.type';
import { useFsm } from './useFsm';
import { Content } from './Content';

const defaultAlign = 'bottom';
const defaultOffset = 0;

export const Popover: FC<Props> = ({
  align = defaultAlign,
  children: [Trigger, ...restChildren],
  offset = defaultOffset,
  ...rest
}: Props): JSX.Element => {
  const {
    handleAnimationEnd,
    hide,
    fxState,
    isVisible,
    setTriggerElement,
    show,
    triggerBounds,
  } = useFsm();
  const contentRef = useRef<HTMLElement>(null);

  const EnhacedTrigger = cloneElement(Trigger, {
    onClick: (event: MouseEvent): void => {
      setTriggerElement(event.target as Element);
      show();
    },
  });
  function handleEscape(event: KeyboardEvent): void {
    if (isVisible && event.key === 'Escape') {
      event.stopPropagation();
      hide();
    }
  }
  function effect(): () => void {
    document.addEventListener('keydown', handleEscape, false);
    return (): void => document.removeEventListener('keydown', handleEscape);
  }
  useEffect(effect, [isVisible]);
  useClickAway(contentRef, hide);
  return (
    <Fragment>
      {EnhacedTrigger}
      {isVisible && triggerBounds && (
        <Content
          {...rest}
          align={align}
          fxState={fxState}
          handleAnimationEnd={handleAnimationEnd}
          ref={contentRef}
          triggerBounds={triggerBounds}
          offset={offset}
        >
          {restChildren}
        </Content>
      )}
    </Fragment>
  );
};

Popover.defaultProps = {
  align: defaultAlign,
  offset: defaultOffset,
};
