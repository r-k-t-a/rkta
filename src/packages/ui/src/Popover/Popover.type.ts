import { ReactElement, ReactNode } from 'react';
import { RktaElement } from '../Provider';

import { Align } from '../Bind/Bind.type';

export type PopoverProps = RktaElement & {
  align?: Align;
  children: [ReactElement, ReactNode];
  offset?: number;
};
