/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import Spinner from '../Spinner';

import useProviderContext from '../Provider/useProviderContext';
import { ButtonProps } from './Button.defs';
import { spinnerCss } from './Button.styles';

import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';

const Button: SFC<ButtonProps> = ({
  noRipple,
  children,
  composition = ['Button', 'Paper', 'Addon', 'Text'],
  spinnerProps,
  ...rest
}: ButtonProps): ReactElement => {
  const { applyStyles, getElement } = useProviderContext();
  const [nextProps, Element] = applyStyles(
    { element: 'button', normal: true, button: true, ...rest },
    ...composition,
  );
  const [rippleProps, buttonProps] = useRipple(nextProps);
  const SpinnerWrapper = getElement('span', {});
  return (
    <Element {...nextProps} {...buttonProps}>
      {children}
      {!noRipple && <Ripple {...rippleProps} />}
      {rest.busy && (
        <SpinnerWrapper css={spinnerCss}>
          <Spinner color={rest.color} {...spinnerProps} />
        </SpinnerWrapper>
      )}
    </Element>
  );
};

Button.defaultProps = {
  busy: false,
  color: 'text',
  tabIndex: 0,
};

export default Button;
