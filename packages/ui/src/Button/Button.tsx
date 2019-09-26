/** @jsx jsx */
import { forwardRef, SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import Spinner from '../Spinner';

import useProviderContext from '../Provider/useProviderContext';
import { ButtonProps } from './Button.defs';
import { spinnerCss } from './Button.styles';

import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';

const Button: SFC<ButtonProps> = forwardRef(
  (
    {
      noRipple,
      children,
      composition = ['Button', 'Paper', 'Addon', 'Text'],
      spinnerProps,
      ...rest
    }: ButtonProps,
    ref,
  ): ReactElement => {
    const { applyStyles, getElement } = useProviderContext();
    const [nextProps, Element] = applyStyles(
      { element: 'button', normal: true, button: true, ...rest },
      ...composition,
    );
    const [rippleProps, buttonProps] = useRipple(nextProps);
    const SpinnerWrapper = getElement('span', {});
    return (
      <Element {...nextProps} {...buttonProps} ref={ref}>
        {children}
        {!noRipple && <Ripple {...rippleProps} />}
        {rest.busy && (
          <SpinnerWrapper css={spinnerCss}>
            <Spinner {...spinnerProps} />
          </SpinnerWrapper>
        )}
      </Element>
    );
  },
);

Button.defaultProps = {
  busy: false,
  color: 'currentColor',
  tabIndex: 0,
  type: 'button',
};

export default Button;
