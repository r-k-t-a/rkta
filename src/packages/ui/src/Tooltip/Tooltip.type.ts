import { ReactElement, ReactNode } from 'react';

import { Align } from '../FloatingArea/FloatingArea.type';
import { PaperProps } from '../Paper';
import { TextProps } from '../Text';

export type TooltipProps = PaperProps &
  TextProps & {
    align?: Align;
    children: ReactElement;
    content: ReactNode;
    offset?: number;
  };
