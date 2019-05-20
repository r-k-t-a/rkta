import { createContext } from 'react';
import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from './theme/themeTypes';

export interface ContextInterface {
  theme: ThemeInterface;
}

export default createContext<ContextInterface>({ theme: defaultTheme });
