import { ReactNode } from 'react';

import { Addon } from '../../Addon/Addon.defs';

export interface ListTextProps extends Addon {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
}
