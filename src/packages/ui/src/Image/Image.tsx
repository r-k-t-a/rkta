import React, { forwardRef, RefObject, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

import { ImageProps } from './Image.type';

/**
 * ```js
 * import { Image } from '@rkta/ui';
 *
 * <div style={{ padding: `24px` }}>
 *   <Image
 *     alt=""
 *     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5Te3uRmIwOkhgRmYWMTEwpPI0uRR6Cf-7feBM17sygo12c-uf"
 *     srcSet="https://www.stockphotosecrets.com/wp-content/uploads/2018/09/Distracted-BF-Meme-840x495.jpg"
 *     css={{ width: '50%', height: 400, margin: 'auto', display: 'block' }}
 *   />
 * </div>
 * ```
 */

export const Image = forwardRef<HTMLImageElement, ImageProps>(
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
