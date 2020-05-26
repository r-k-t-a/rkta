/** @jsx jsx */
import { ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { OverlayCss } from './Ripple.styles';
import { getElement } from '../../Provider/getElement';

interface Props {
  mouseover: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onOverlayAnimationEnd: Function;
}

export const Overlay = ({ mouseover, onOverlayAnimationEnd }: Props): ReactElement => {
  const Element = getElement('span', {});
  return <Element css={OverlayCss(mouseover)} onAnimationEnd={onOverlayAnimationEnd} />;
};
