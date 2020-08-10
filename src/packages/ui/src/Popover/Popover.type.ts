import { ReactElement, ReactNode } from 'react';
import { RktaElement } from '../Provider';

import { Align } from '../FloatingArea/FloatingArea.type';

export type PopoverProps = RktaElement & {
  align?: Align;
  children: [ReactElement, ReactNode];
  disabled?: boolean;
  offset?: number;
};
