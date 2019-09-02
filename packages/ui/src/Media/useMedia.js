import { useEffect, useState, useContext } from 'react';
import isEqual from 'lodash/isEqual';

import Context from '../Theme/Context';
import matchMedia from './matchMedia';

const withTheme = theme => (acc, key) => ({
  ...acc,
  [key]: theme && matchMedia(theme.mediaQueries[key]),
});

export default function useMedia(...args) {
  const [state, setState] = useState(null);
  const { theme } = useContext(Context);

  function handleResize() {
    const nextState = args.reduce(withTheme(theme), {});
    if (!isEqual(nextState, state)) setState(nextState);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, args.concat(state && Object.values(state)));

  return state || args.reduce(withTheme(null), {});
}
