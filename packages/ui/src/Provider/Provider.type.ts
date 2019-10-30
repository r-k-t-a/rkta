import { RktaTheme } from './theme/theme.type';
import { Resolver } from './getElement.type';
import { useStylesFunctionType } from './useStyles';

export interface ContextInterface {
  getElement: Resolver;
  replaceTheme?: (nextTheme: RktaTheme) => void;
  theme: RktaTheme;
  applyStyles: useStylesFunctionType;
}
