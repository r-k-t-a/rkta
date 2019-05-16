import { createContext } from 'react';
import defaultTheme from './theme/defaultTheme';

export interface ContextInterface {
  theme: object;
}

export default createContext({ theme: defaultTheme });
