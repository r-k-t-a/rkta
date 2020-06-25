/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { WaveCss } from './Ripple.styles';
import { RippleProps, Wave as WaveCommon } from './Ripple.type';
import { getElement } from '../../Provider/getElement';

type WaveProps = WaveCommon & {
  onWaveDissolve: RippleProps['onWaveDissolve'];
};

export const Wave: FC<WaveProps> = ({ onWaveDissolve, ...wave }: WaveProps): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={WaveCss(wave)} onAnimationEnd={onWaveDissolve} />;
};
