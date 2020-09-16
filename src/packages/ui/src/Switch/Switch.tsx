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
export const Switch: FC<SwitchProps> = (props) => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles({ ...props }, 'Switch');
  return <input type="checkbox" {...nextProps} />;
};

Switch.defaultProps = {
  padding: '1px',
  ratio: 1.5,
  size: '24px',
};
