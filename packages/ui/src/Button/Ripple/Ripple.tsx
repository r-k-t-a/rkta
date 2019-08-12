import React, { ReactElement } from 'react';

import Atom from '../../Atom/Atom';
import { BoxCss } from './Ripple.styles';
import { RippleProps } from './Ripple.d';
import Wave from './Wave';
import Overlay from './Overlay';

const Ripple = ({
  mouseover,
  overlayIsVisible,
  onOverlayAnimationEnd,
  onWaveDissolve,
  waves,
}: RippleProps): ReactElement => {
  const hasWaves = waves.length > 0;
  return (
    <>
      {(overlayIsVisible || hasWaves) && (
        <Overlay mouseover={mouseover} onOverlayAnimationEnd={onOverlayAnimationEnd} />
      )}
      {hasWaves && (
        <Atom css={BoxCss} element="span">
          {waves.map(
            (wave): ReactElement => (
              <Wave key={wave.id} {...wave} onWaveDissolve={onWaveDissolve} />
            ),
          )}
        </Atom>
      )}
    </>
  );
};

export default Ripple;
