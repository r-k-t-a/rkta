import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import flatten from 'lodash/flatten';
import memoize from 'lodash/memoize';

import useProviderContext from '../Provider/useProviderContext';
import matchMedia from './match';
import { EntriesType, UseMediaResult } from './Media.d';

const evaluate = (entries: EntriesType): UseMediaResult =>
  entries.reduce(
    (acc, [key, value]): {} => ({
      ...acc,
      [key]: matchMedia(value),
    }),
    {},
  ) as UseMediaResult;

function resolver(entries: EntriesType): string {
  const { innerHeight, innerWidth, screen } = window;
  return [...flatten(entries), innerHeight, innerWidth, screen.availWidth].join();
}

const evaluateMemo = memoize(evaluate, resolver);

const evaluateServer = (entries: EntriesType): UseMediaResult =>
  entries.reduce((acc, [key]): {} => ({ ...acc, [key]: null }), {}) as UseMediaResult;

export default function useMedia(): UseMediaResult {
  const { theme } = useProviderContext();
  const [state, setState] = useState();
  const entries = Object.entries(theme.media);

  function updateState(): void {
    const nextState: {} = evaluateMemo(entries);
    if (!isEqual(nextState, state)) setState(nextState);
  }

  useEffect((): (() => void) => {
    window.addEventListener('resize', updateState);
    updateState();
    return (): void => {
      window.removeEventListener('resize', updateState);
    };
  }, flatten(entries));

  return state || evaluateServer(entries);
}
