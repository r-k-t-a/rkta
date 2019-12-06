import { RefObject, useRef, useEffect, useState } from 'react';
import { CssEmotion } from '../Provider/theme/theme.type';

interface AnimationProps {
  onTransitionEnd: Function;
  ref: RefObject<null>;
  style: CssEmotion;
}

export default (visible?: boolean): AnimationProps => {
  const ref = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [auto, setAuto] = useState(false);
  const [height, setHeight] = useState(0);
  const [nextHeight, setNextHeight] = useState<number | null>(null);

  useEffect(() => {
    const domElement = ref.current;
    const targetHeight = visible ? domElement.scrollHeight : 0;
    if (targetHeight !== height) {
      setAuto(false);
      setNextHeight(targetHeight);
    }
  }, [visible, ref.current]);

  useEffect(() => {
    if (nextHeight !== null && height !== nextHeight && !auto) {
      setNextHeight(null);
      setHeight(nextHeight);
    }
  }, [auto, height, nextHeight]);

  const onTransitionEnd = (): void => {
    if (visible) setAuto(true);
  };

  return {
    ref,
    style: { height: auto && visible ? 'auto' : height },
    onTransitionEnd,
  };
};
