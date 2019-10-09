/** @jsx jsx */
import { forwardRef, SFC } from 'react';
import { jsx } from '@emotion/core';

import Spinner from '../Spinner';
import useProviderContext from '../Provider/useProviderContext';

import Props from './Button.d';
import { spinnerCss } from './Button.styles';

import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';

const injectedProps = { element: 'button', normal: true, button: true };

const Button: SFC<Props> = forwardRef(
  (
    {
      noRipple,
      children,
      composition = ['Button', 'Paper', 'Addon', 'Text'],
      spinnerProps,
      ...rest
    }: Props,
    ref,
  ): JSX.Element => {
    const { applyStyles, getElement } = useProviderContext();
    const [nextProps, Element] = applyStyles({ ...injectedProps, ...rest }, ...composition);
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
