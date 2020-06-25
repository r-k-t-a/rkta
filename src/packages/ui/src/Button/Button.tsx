/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { Spinner } from '../Spinner';
import { useProviderContext } from '../Provider';

import { ButtonProps } from './Button.type';
import { Ripple } from './Ripple';
import { useRipple } from './Ripple/useRipple';

const injectedProps = { element: 'button', normal: true, button: true };

export const Button = forwardRef(
  (
    {
      noRipple,
      children,
      composition = ['Button', 'Paper', 'Addon', 'Text'],
      spinnerProps,
      ...rest
    }: ButtonProps,
    ref,
  ): JSX.Element => {
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles({ ...injectedProps, ...rest }, ...composition);
    const [rippleProps, buttonProps] = useRipple(nextProps);
    return (
      <Element {...nextProps} {...buttonProps} ref={ref}>
        {children}
        {!noRipple && <Ripple {...rippleProps} />}
        {rest.busy && (
          <span>
            <Spinner {...spinnerProps} />
          </span>
        )}
      </Element>
    );
  },
);

Button.defaultProps = {
  busy: false,
  tabIndex: 0,
  type: 'button',
};
