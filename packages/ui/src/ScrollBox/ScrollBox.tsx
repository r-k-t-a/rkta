/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './ScrollBox.type';
import { useProviderContext } from '../Provider';
import useAnimation from './useAnimation';

// eslint-disable-next-line react/prop-types
export const ScrollBox: SFC<Props> = ({ children, visible, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();

  const ainmationProps = useAnimation(visible);
  const extraProps =
    !rest.animateHeight || typeof rest.height !== 'undefined' ? null : ainmationProps;

  const [nextProps, Element] = applyStyles(
    { ...rest, ...extraProps },
    'ScrollBox',
    'Paper',
    'Text',
  );
  return <Element {...nextProps}>{children}</Element>;
};
