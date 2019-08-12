import { ReactElement } from 'react';

import { AddonProps } from '../../Addon/Addon.d';

export interface ListTextProps extends AddonProps {
  label: ReactElement;
  description?: ReactElement;
  reverse?: boolean;
}
