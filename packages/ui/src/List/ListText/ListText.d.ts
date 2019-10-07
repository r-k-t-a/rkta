import { ReactNode } from 'react';

import Addon from '../../Addon/Addon.d';

export default interface ListText extends Addon {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
}
