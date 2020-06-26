/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { AddonProps } from './Addon.type';

/**
 * ```js
 * import { Addon, ListItem } from '@rkta/ui';
 * import { ChevronSmallRight } from '@rkta/entypo';
 *
 * <ListItem fitAll>
 *   <Addon>
 *    <ChevronSmallRight />
 *   </Addon>
 *   <Addon main>Addon</Addon>
 * </ListItem>
 * ```
 */
export const Addon: FC<AddonProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'span', ...rest }, 'Addon', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
