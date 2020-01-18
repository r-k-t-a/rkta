import { RefObject, useRef, useEffect, useState } from 'react';
import { CssEmotion } from '../Provider/theme';

interface AnimationProps {
  ref: RefObject<HTMLElement>;
  style: CssEmotion;
}

export default (visible?: boolean): AnimationProps => {
  const ref = useRef<HTMLElement>(null);
  const [auto, setAuto] = useState(false);
  const [height, setHeight] = useState(0);
  const [nextHeight, setNextHeight] = useState<number | null>(null);

  useEffect(() => {
    const domElement = ref.current as HTMLElement;
    const targetHeight = visible ? domElement.scrollHeight : 0;
    if (targetHeight !== height) {
      setAuto(false);
      setNextHeight(targetHeight);
    }
  }, [visible, ref.current]);

  const checkHeights = (): void => {
    const domElement = ref.current as HTMLElement;
    if (
      nextHeight !== null &&
      height !== nextHeight &&
      !auto &&
      domElement.style.height !== 'auto'
    ) {
      setNextHeight(null);
      setHeight(nextHeight);
    }
  };

  useEffect(() => {
    const interval = setInterval(checkHeights, 64);
    return (): void => clearInterval(interval);
  }, [auto, height, nextHeight, ref.current]);

  const onTransitionEnd = (): void => {
    if (visible) setAuto(true);
  };

  useEffect(() => {
    const domElement = ref.current as HTMLElement;
    if (!domElement) return undefined;
    domElement.addEventListener('transitionend', onTransitionEnd);
    return (): void => {
      domElement.removeEventListener('transitionend', onTransitionEnd);
    };
  });

  return {
    ref,
    style: { height: auto && visible ? 'auto' : height },
  };
};
