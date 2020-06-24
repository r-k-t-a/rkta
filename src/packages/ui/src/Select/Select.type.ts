import { ReactNode, HTMLProps } from 'react';
import { PaperOwnProps } from '../Paper/Paper.type';

export type Props = PaperOwnProps &
  HTMLProps<HTMLSelectElement> & {
    active?: boolean;
    caption?: ReactNode;
    children?: ReactNode;
    main?: boolean;
    prepend?: ReactNode;
    size?: never;
  };
