/* eslint-disable react/jsx-fragments */
import React, { cloneElement, FC, Fragment, useRef } from 'react';
import useKey from 'react-use/lib/useKey';
import useClickAway from 'react-use/lib/useClickAway';

import { Props } from './Popover.type';
import { useFsm } from './useFsm';
import { useProviderContext } from '../Provider';

export const Popover: FC<Props> = ({
  children: [Trigger, ...Content],
  ...rest
}: Props): JSX.Element => {
  const { hide, isVisible, setTriggerElement, show, triggerBounds } = useFsm();
  const { applyStyles } = useProviderContext();
  const popoverRef = useRef<HTMLElement>(null);
  const nextProps = isVisible ? { ...rest, triggerBounds } : rest;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ triggerBounds: omitTriggerBounds, ...elementProps }, Element] = applyStyles(
    nextProps,
    'Popover',
    'Paper',
    'Text',
  );
  function handleClick(event: MouseEvent): void {
    setTriggerElement(event.currentTarget as Element);
    show();
  }
  const EnhacedTrigger = cloneElement(Trigger, {
    onClick: handleClick,
  });
  useKey('Escape', hide);
  useClickAway(popoverRef, hide);
  return (
    <Fragment>
      {EnhacedTrigger}
      {isVisible && (
        <Element {...elementProps} ref={popoverRef}>
          {Content}
        </Element>
      )}
    </Fragment>
  );
};

Popover.defaultProps = {
  align: 'bottom',
  rize: 1,
  offset: 8,
};
