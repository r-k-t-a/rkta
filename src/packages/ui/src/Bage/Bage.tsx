/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { BageProps } from './Bage.type';

/**
 * ```js
 * import { Link, Playground, Props } from 'docz';
 * import { Bage } from './Bage';
 *
 * <Bage bgColor="primary">Bage</Bage>
 * <Bage color="paper" bgColor="secondary" h5>
 *  Bage
 * </Bage>
 * ```
 */
export const Bage: FC<BageProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();

  const [nextProps, Element] = applyStyles(
    { rounded: true, overline: true, nowrap: true, ...rest },
    'Bage',
    'Paper',
    'Text',
  );

  return <Element {...nextProps}>{children}</Element>;
};
