/** @jsx jsx */
import { ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { OverlayCss } from './Ripple.styles';
import { getElement } from '../../Provider/getElement';

interface Props {
  mouseover: boolean;
  onOverlayAnimationEnd: Function;
}

const Overlay = ({ mouseover, onOverlayAnimationEnd }: Props): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={OverlayCss(mouseover)} onAnimationEnd={onOverlayAnimationEnd} />;
};

export default Overlay;
