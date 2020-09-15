import { HTMLProps } from 'react';

import { Color } from '../Provider/theme';

export type SwitchProps = HTMLProps<HTMLButtonElement> & {
  color?: Color;
  on?: boolean;
  size?: number;
};
