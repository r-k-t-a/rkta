import { createContext } from 'react';
import defaultTheme, { ThemeInterface } from './theme/defaultTheme';

export interface ContextInterface {
  theme: ThemeInterface;
}

export default createContext({ theme: defaultTheme });
