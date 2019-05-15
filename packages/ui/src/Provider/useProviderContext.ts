import { useContext } from 'react';

import Context, { ContextValueDefs } from './Context';

export default function useProviderContext(): ContextValueDefs {
  return useContext(Context);
}
