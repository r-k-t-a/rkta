/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { WaveCss } from './Ripple.styles';
import { Props as RippleProps, Wave as WaveCommon } from './Ripple.type';
import { getElement } from '../../Provider/getElement';

interface Props extends WaveCommon {
  onWaveDissolve: RippleProps['onWaveDissolve'];
}

export const Wave: FC<Props> = ({ onWaveDissolve, ...wave }: Props): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={WaveCss(wave)} onAnimationEnd={onWaveDissolve} />;
};
