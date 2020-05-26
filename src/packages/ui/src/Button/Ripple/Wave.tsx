/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { WaveCss } from './Ripple.styles';
import { Wave as WaveCommon } from './Ripple.type';
import { getElement } from '../../Provider/getElement';

interface Props extends WaveCommon {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onWaveDissolve: Function;
}

export const Wave: SFC<Props> = ({ onWaveDissolve, ...wave }: Props): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={WaveCss(wave)} onAnimationEnd={onWaveDissolve} />;
};
