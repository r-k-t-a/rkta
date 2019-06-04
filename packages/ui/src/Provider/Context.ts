import { createContext } from 'react';
import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from './theme/theme.types';

export interface ContextInterface {
  theme: ThemeInterface;
  replaceTheme?: (nextTheme: ThemeInterface) => void;
}

export default createContext<ContextInterface>({ theme: defaultTheme });
