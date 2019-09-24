import { createContext } from 'react';
import { RktaTheme } from './theme/theme.defs';
import defaultTheme from './theme/defaultTheme';
import { getElement, ElementResolverFunction } from './getElement';
import { NextPropsAndElementType, useStylesFunctionType } from './useStyles';

export interface ContextInterface {
  getElement: ElementResolverFunction;
  replaceTheme?: (nextTheme: RktaTheme) => void;
  theme: RktaTheme;
  applyStyles: useStylesFunctionType;
}

export default createContext<ContextInterface>({
  getElement,
  theme: defaultTheme,
  applyStyles: (props): NextPropsAndElementType => [props, 'div'],
});
