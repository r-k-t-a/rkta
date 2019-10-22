import { useContext } from 'react';
import { Context, ContextInterface } from './Context';

export function useProviderContext(): ContextInterface {
  return useContext(Context);
}
