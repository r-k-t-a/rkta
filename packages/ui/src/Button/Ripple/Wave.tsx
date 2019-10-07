/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import { WaveCss } from './Ripple.styles';
import { WaveInterface } from './Ripple.d';
import { getElement } from '../../Provider/getElement';

interface Props extends WaveInterface {
  onWaveDissolve: Function;
}

const Wave: SFC<Props> = ({ onWaveDissolve, ...wave }: Props): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={WaveCss(wave)} onAnimationEnd={onWaveDissolve} />;
};

export default Wave;
