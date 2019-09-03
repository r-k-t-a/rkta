import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import memoize from 'lodash';

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

const evaluateQueries = ({ media }: ThemeInterface): {} =>
  Object.entries(media).reduce(
    (acc, [key, value]): {} => ({
      ...acc,
      [key]: matchMedia(value),
    }),
    {},
  );

function resolver(theme, context) {}

const evaluate = memoize(evaluateQueries, resolver);

export default function useMedia(...args: string[]): {} {
  const { theme } = useProviderContext();
  const [state, setState] = useState<{} | null>(null);

  function handleResize(): void {
    const nextState: {} = evaluate(theme, window);
    if (!isEqual(nextState, state)) setState(nextState);
  }

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, args.concat(state ? Object.values(state) : []));

  return state || evaluate(theme);
}
