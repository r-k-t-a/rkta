import { useContext } from 'react';

import Context, { ContextInterface } from './Context';

export default function useProviderContext(): ContextInterface {
  return useContext(Context);
}
