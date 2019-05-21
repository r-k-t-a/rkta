import { createContext } from 'react';
import defaultTheme from './theme/defaultTheme';
import { ThemeInterface } from '../types/theme.types';

export interface ContextInterface {
  theme: ThemeInterface;
}

export default createContext<ContextInterface>({ theme: defaultTheme });
