import { ReactElement } from 'react';

import { Addon } from '../../Addon/Addon.defs';

export interface ListTextProps extends Addon {
  label: ReactElement;
  description?: ReactElement;
  reverse?: boolean;
}
