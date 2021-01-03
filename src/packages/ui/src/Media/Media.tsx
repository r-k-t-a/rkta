import { FC, useEffect } from 'react';
import { useToggle } from '@rkta/hooks';

import { MediaProps } from './Media.type';
import { useProviderContext } from '../Provider';

// import { clientMedia } from './clientMedia';
import { serverMedia } from './serverMedia';

/**
 * ```js
 * import { Media } from '@rkta/ui';
 *
 * <Media phone>
 *  Phone
 * <Media>
 * ```
 */
export const Media: FC<MediaProps> = ({ children, ...queries }): JSX.Element => {
  const [, toggle] = useToggle();
  const { theme } = useProviderContext();

  function effect(): () => void {
    window.addEventListener('resize', toggle);
    return (): void => {
      window.removeEventListener('resize', toggle);
    };
  }
  useEffect(effect);

  return serverMedia(children, queries, theme) as JSX.Element;
};
