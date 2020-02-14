import React, { FC, forwardRef, useRef, RefObject } from 'react';
import { useIntersectionObserver } from '@rkta/hooks';
import { useProviderContext } from '../Provider';

import { Props } from './Image.type';

export const Image: FC<Props> = forwardRef<HTMLImageElement, Props>(
  ({ alt, srcSet, ...rest }: Props, externalRef): JSX.Element => {
    const internalRef = useRef<HTMLImageElement>(null);
    const ref = (externalRef as RefObject<HTMLImageElement>) || internalRef;
    const intersetionRation = useIntersectionObserver(ref.current);
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles({ element: 'img', ...rest }, 'Image');
    return <Element {...nextProps} alt={alt} srcSet={intersetionRation > 0 ? srcSet : undefined} />;
  },
);
