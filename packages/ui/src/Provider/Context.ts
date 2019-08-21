import { createContext } from 'react';
import { ThemeInterface } from './theme/theme.defs';
import defaultTheme from './theme/defaultTheme';
import { getElement, ElementResolverFunction } from './getElement';
import { NextPropsAndElementType, useStylesFunctionType } from './useStyles';

export interface ContextInterface {
  getElement: ElementResolverFunction;
  replaceTheme?: (nextTheme: ThemeInterface) => void;
  theme: ThemeInterface;
  applyStyles: useStylesFunctionType;
}

export default createContext<ContextInterface>({
  getElement,
  theme: defaultTheme,
  applyStyles: (props): NextPropsAndElementType => [props, 'div'],
});
