import React, { ReactElement, SFC } from 'react';

import Atom from '../../Atom';
import { WaveCss } from './Ripple.styles';
import { WaveInterface } from './Ripple.d';

interface Props extends WaveInterface {
  onWaveDissolve: Function;
}

const Wave: SFC<Props> = ({ onWaveDissolve, ...wave }: Props): ReactElement => (
  <Atom css={WaveCss(wave)} element="span" onAnimationEnd={onWaveDissolve} />
);

export default Wave;
