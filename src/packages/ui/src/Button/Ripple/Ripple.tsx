/** @jsx jsx */
import { Fragment, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { BoxCss } from './Ripple.styles';
import { Props } from './Ripple.type';
import { Wave } from './Wave';
import { Overlay } from './Overlay';
import { getElement } from '../../Provider/getElement';

/* eslint-disable react/jsx-fragments */
export const Ripple = ({
  mouseover,
  overlayIsVisible,
  onOverlayAnimationEnd,
  onWaveDissolve,
  waves,
}: Props): ReactElement => {
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
