import { createContext } from 'react';

import ThemeDefs from './theme/definitions';
import defaultTheme from './theme/defaultTheme';

export interface ContextValueDefs {
  theme: ThemeDefs;
}

export default createContext({ theme: defaultTheme });
