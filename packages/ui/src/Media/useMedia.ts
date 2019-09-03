import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';

import { ThemeInterface } from '../Provider/theme/theme.defs';
import useProviderContext from '../Provider/useProviderContext';
import matchMedia from './match';

const withTheme = (theme: ThemeInterface | null): ((acc: {}, key: string) => {}) => (
  acc: {},
  key: string,
): {} => ({
  ...acc,
  [key]: theme && matchMedia(theme.mediaQueries[key] as string),
});

export default function useMedia(...args: string[]): {} {
  const [state, setState] = useState<{} | null>(null);
  const { theme } = useProviderContext();

  function handleResize(): void {
    const nextState: {} = args.reduce(withTheme(theme), {});
    if (!isEqual(nextState, state)) setState(nextState);
  }

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, args.concat(state ? Object.values(state) : []));

  return state || args.reduce(withTheme(null), {});
}
