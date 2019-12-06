import { RefObject, useRef, useEffect, useState } from 'react';

interface AnimationProps {
  onTransitionEnd: Function;
  ref: RefObject<null>;
  height: number | string;
  visible: boolean;
}

export default (isActive: boolean): AnimationProps => {
  const ref = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [auto, setAuto] = useState(false);
  const [height, setHeight] = useState(0);
  const [nextHeight, setNextHeight] = useState<number | null>(null);
  const [visible, setVisible] = useState(isActive);

  useEffect(() => {
    const domElement = ref.current;
    if (!domElement) {
      if (isActive) setVisible(true);
      return;
    }

    const targetHeight = isActive ? domElement.scrollHeight : 0;
    if (targetHeight !== height) {
      setAuto(false);
      setNextHeight(targetHeight);
    }
  }, [isActive, ref.current, visible]);

  useEffect(() => {
    if (nextHeight !== null && height !== nextHeight && !auto) {
      setNextHeight(null);
      setHeight(nextHeight);
    }
  }, [auto, height, nextHeight]);

  const onTransitionEnd = (): void => {
    if (isActive) setAuto(true);
    else setVisible(false);
  };

  return {
    visible,
    ref,
    height: auto && isActive && visible ? 'auto' : height,
    onTransitionEnd,
  };
};
