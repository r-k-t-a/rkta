/** @jsx jsx */
import { Fragment, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { BoxCss } from './Ripple.styles';
import { RippleProps } from './Ripple.defs';
import Wave from './Wave';
import Overlay from './Overlay';
import { getElement } from '../../Provider/getElement';

/* eslint-disable react/jsx-fragments */
const Ripple = ({
  mouseover,
  overlayIsVisible,
  onOverlayAnimationEnd,
  onWaveDissolve,
  waves,
}: RippleProps): ReactElement => {
  const hasWaves = waves.length > 0;
  const WavesWrapElement = getElement('span', {});
  return (
    <Fragment>
      {(overlayIsVisible || hasWaves) && (
        <Overlay mouseover={mouseover} onOverlayAnimationEnd={onOverlayAnimationEnd} />
      )}
      {hasWaves && (
        <WavesWrapElement css={BoxCss}>
          {waves.map(
            (wave): ReactElement => (
              <Wave key={wave.id} {...wave} onWaveDissolve={onWaveDissolve} />
            ),
          )}
        </WavesWrapElement>
      )}
    </Fragment>
  );
};

export default Ripple;
