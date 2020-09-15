/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { SwitchProps } from './Switch.type';

/**
 * ```js
 * import { Switch } from './Switch';
 *
 * <Switch on onClick={handleClick} />
 * ```
 */
export const Switch: FC<SwitchProps> = ({ color = 'primary', on, ...rest }) => {
  const { applyStyles } = useProviderContext();

  const [nextProps] = applyStyles({ color, on, rounded: true, ...rest }, 'Switch');

  return (
    <button type="button" {...nextProps}>
      <span />
    </button>
  );
};
