import React, { FC, forwardRef, RefObject, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

import { Props } from './Image.type';

export const Image: FC<Props> = forwardRef<HTMLImageElement, Props>(
  ({ alt, srcSet, ...rest }: Props, externalRef): JSX.Element => {
    const internalRef = useRef<HTMLImageElement>(null);
    const [switchedOn, setSwitchedOn] = useState(false);
    const ref = (externalRef as RefObject<HTMLImageElement>) || internalRef;
    const intersectionRation = useIntersectionObserver(ref.current as Element);
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles({ element: 'img', ...rest, ref }, 'Image');

    useEffect(() => {
      if (switchedOn || !intersectionRation) return;
      setSwitchedOn(true);
    }, [intersectionRation]);

    return <Element {...nextProps} alt={alt} srcSet={switchedOn ? srcSet : undefined} />;
  },
);
