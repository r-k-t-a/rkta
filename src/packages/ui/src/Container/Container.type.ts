import { RktaElement } from '../Provider/theme';
import { breakpoint } from '../Provider/theme/breakpoint';

type Breakpoints = typeof breakpoint;

export type ContainerProps = RktaElement & {
  disableGutters?: boolean;
  maxWidth?: keyof Breakpoints | string;
  fixed?: boolean;
};
