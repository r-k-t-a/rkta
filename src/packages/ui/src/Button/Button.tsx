/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { Spinner } from '../Spinner';
import { useProviderContext } from '../Provider';

import { ButtonProps } from './Button.type';
// import { Ripple } from './Ripple';
// import { useRipple } from './Ripple/useRipple';

const injectedProps = { element: 'button', normal: true, button: true };

/**
 * ```js
 * import { Button } from '@rkta/ui';
 *
 * <Button bgColor="color1" round>
 *   Button round
 * </Button>
 *
 * <Button bgColor="primary" rize={1} round busy size={56}>
 *  Button round and busy state
 * </Button>
 *
 * ```
 */
export const Button = forwardRef(
  (
    {
      // noRipple,
      children,
      composition = ['Text', 'Button', 'Paper', 'Addon'],
      spinnerProps,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles({ ...injectedProps, ...rest }, ...composition);
    // const [rippleProps, buttonProps] = useRipple(nextProps);
    return (
      <Element
        {...nextProps}
        // {...buttonProps}
        ref={ref}
      >
        {children}
        {/* {!noRipple && <Ripple {...rippleProps} />} */}
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
