import React, {
  SFC,
  useState,
  useEffect,
  EffectCallback,
  FocusEvent,
  PointerEvent,
  ReactElement,
} from 'react';
import get from 'lodash/get';

import Atom from '../Atom';
import Wave from './RippleWave';
import { getBounds } from './util';
import { getInnerRippleStyles, RippleStyles } from './Ripple.styles';

interface OutlineObject {
  css: {};
  size: number;
}

interface WaveObject extends OutlineObject {
  created: number;
  released: boolean;
}

const Ripple: SFC = (): ReactElement => {
  const [outline, setOutline] = useState<OutlineObject | null>(null);
  const [waves, setWaves] = useState<WaveObject[]>([]);
  const [refNode, setRef] = useState(null);
  const [highlight, setHighlight] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parentNode = get(refNode, 'parentNode') as any;

  const makeTransitionHandler = (created: number): Function => (): void => {
    setWaves(waves.filter((wave: { created: number }): boolean => wave.created !== created));
  };

  const setFocus = (event: FocusEvent): void => {
    if (waves.length) return;
    if (!parentNode) return;

    const { width: innerWidth, height: innerHeight } = parentNode.getBoundingClientRect();
    const { width, height } = getBounds(event);
    const size = Math.max(innerHeight, innerWidth, 32);
    const halfSize = size / 2;

    const outlineProps = {
      css: {
        backgroundColor: 'currentColor',
        left: `${width / 2 - halfSize}px`,
        top: `${height / 2 - halfSize}px`,
        transform: `translate(-${size}px, -${size}px)`,
        zIndex: 2,
      },
      size,
    };

    setOutline(outlineProps);
  };
  const removeFocus = (): void => {
    setOutline(null);
  };

  const handleMouseEnter = (): void => {
    setHighlight(true);
  };
  const handleMouseLeave = (): void => {
    setHighlight(false);
  };

  const handlePointerDown = (event: PointerEvent): void => {
    const { left, top, width, height } = getBounds(event);
    const halfSize = (width ** 2 + height ** 2) ** 0.5;
    const size = halfSize * 2;
    setWaves(
      (prevWaves): WaveObject[] =>
        prevWaves.concat({
          created: performance.now(),
          css: {
            backgroundColor: 'currentColor',
            left: `${event.clientX - left - halfSize}px`,
            top: `${event.clientY - top - halfSize}px`,
            zIndex: 2,
          },
          released: false,
          size,
        }),
    );
  };
  const handlePointerUp = (): void => {
    setWaves(
      (prevWaves): WaveObject[] =>
        prevWaves.map((wave): WaveObject => ({ ...wave, released: true })),
    );
  };

  const effectCallback: EffectCallback = (): (() => void) | void => {
    if (!parentNode) return undefined;

    parentNode.addEventListener('focus', setFocus);
    parentNode.addEventListener('blur', removeFocus);

    parentNode.addEventListener('mouseenter', handleMouseEnter);
    parentNode.addEventListener('mouseleave', handleMouseLeave);

    parentNode.addEventListener('pointerdown', handlePointerDown);
    parentNode.addEventListener('pointerup', handlePointerUp);

    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return (): void => {
      parentNode.removeEventListener('focus', setFocus);
      parentNode.removeEventListener('blur', removeFocus);

      parentNode.removeEventListener('mouseenter', handleMouseEnter);
      parentNode.removeEventListener('mouseleave', handleMouseLeave);

      parentNode.removeEventListener('pointerdown', handlePointerDown);
      parentNode.removeEventListener('pointerup', handlePointerUp);

      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  };

  useEffect(effectCallback, [parentNode]);

  return (
    <Atom atomRef={setRef} css={RippleStyles} element="span">
      <Atom element="span" css={getInnerRippleStyles(highlight)} />
      {waves.map(
        ({ created, ...wave }): React.ReactNode => (
          <Wave key={created} {...wave} onDissolve={makeTransitionHandler(created)} />
        ),
      )}
      {outline && !waves.length && <Wave {...outline} />}
    </Atom>
  );
};

export default Ripple;
