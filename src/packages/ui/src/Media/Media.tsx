import { FC, useEffect } from 'react';
import { useIsMounted, useToggle } from '@rkta/hooks';

import { MediaProps } from './Media.type';
import { useProviderContext } from '../Provider';

import { clientMedia } from './clientMedia';
import { serverMedia } from './serverMedia';

export const Media: FC<MediaProps> = ({ children, ...queries }: MediaProps): JSX.Element => {
  const isMounted = useIsMounted();
  const [, toggle] = useToggle();
  const { theme } = useProviderContext();

  const resolve = isMounted ? clientMedia : serverMedia;

  function effect(): () => void {
    window.addEventListener('resize', toggle);
    return (): void => {
      window.removeEventListener('resize', toggle);
    };
  }
  useEffect(effect);

  return resolve(children, queries, theme) as JSX.Element;
};
