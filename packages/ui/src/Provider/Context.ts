import { createContext } from 'react';
import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from './theme/theme.types';
import { getElement, ElementResolverFunction } from './getElement';

export interface ContextInterface {
  getElement: ElementResolverFunction;
  replaceTheme?: (nextTheme: ThemeInterface) => void;
  theme: ThemeInterface;
}

export default createContext<ContextInterface>({ getElement, theme: defaultTheme });
