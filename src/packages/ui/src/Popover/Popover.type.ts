import { ReactElement, ReactNode } from 'react';
import { RktaElement } from '../Provider';

import { Align } from './Content/Content.type';

export interface Props extends RktaElement {
  align?: Align;
  children: [ReactElement, ReactNode];
  offset?: number;
}
