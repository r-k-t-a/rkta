import { useContext } from 'react';
import { Context } from '@rkta/context';

import { Context as ContextInterface } from './Provider.type';

export function useProviderContext(): ContextInterface {
  return useContext(Context) as ContextInterface;
}
