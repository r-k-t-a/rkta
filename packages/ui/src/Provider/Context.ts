import { createContext } from 'react';
import { RktaTheme } from './theme/theme.type';
import defaultTheme from './theme/defaultTheme';
import { getElement } from './getElement';
import { Resolver } from './getElement.type';
import { NextPropsAndElementType, useStylesFunctionType } from './useStyles';

export interface ContextInterface {
  getElement: Resolver;
  replaceTheme?: (nextTheme: RktaTheme) => void;
  theme: RktaTheme;
  applyStyles: useStylesFunctionType;
}

export default createContext<ContextInterface>({
  getElement,
  theme: defaultTheme,
  applyStyles: (props): NextPropsAndElementType => [props, 'div'],
});
