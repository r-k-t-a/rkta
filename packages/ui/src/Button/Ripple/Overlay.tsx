import React, { ReactElement } from 'react';

import Atom from '../../Atom';
import { OverlayCss } from './Ripple.styles';

interface Props {
  mouseover: boolean;
  onOverlayAnimationEnd: Function;
}

const Overlay = ({ mouseover, onOverlayAnimationEnd }: Props): ReactElement => (
  <Atom css={OverlayCss(mouseover)} element="span" onAnimationEnd={onOverlayAnimationEnd} />
);

export default Overlay;
