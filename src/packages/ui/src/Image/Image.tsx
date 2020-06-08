import React, { forwardRef, RefObject, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

import { Props } from './Image.type';

export type ImageProps = Props;

export const Image = forwardRef<HTMLImageElement, Props>(
  ({ alt, srcSet, ...rest }, externalRef): JSX.Element => {
    const internalRef = useRef<HTMLImageElement>(null);
    const [enableSrcSet, setEnableSrcSet] = useState(false);
    const ref = (externalRef as RefObject<HTMLImageElement>) || internalRef;
    const intersectionRation = useIntersectionObserver(ref.current as Element);
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles({ element: 'img', ...rest, ref }, 'Image');

    useEffect(() => {
      if (enableSrcSet || !intersectionRation) return;
      setEnableSrcSet(true);
    }, [intersectionRation]);

    return <Element {...nextProps} alt={alt} srcSet={enableSrcSet ? srcSet : undefined} />;
  },
);
