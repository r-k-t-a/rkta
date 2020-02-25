import { ReactElement, ReactNode } from 'react';
import { RktaElement } from '../Provider';

import { Align } from '../Bind/Bind.type';

export interface Props extends RktaElement {
  align?: Align;
  children: [ReactElement, ReactNode];
  offset?: number;
}
