import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import flatten from 'lodash/flatten';
import memoize from 'lodash/memoize';

import useProviderContext from '../Provider/useProviderContext';
import matchMedia from './match';

const evaluate = (entries): {} =>
  entries.reduce(
    (acc, [key, value]): {} => ({
      ...acc,
      [key]: matchMedia(value),
    }),
    {},
  );

function resolver(entries) {
  // entries + window.width.height + dpi
}
const evaluateMemo = memoize(evaluateQueries, resolver);

export default function useMedia(): {} {
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

  return state || evaluate(entries);
}
