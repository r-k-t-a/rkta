import { useContext } from 'react';
import { Context } from '@rkta/context';

import { Context as ContextInterface } from './Provider.type';
import { RktaTheme } from './theme';

export function useTheme(): RktaTheme {
  const { theme } = useContext(Context) as ContextInterface;
  return theme;
}
