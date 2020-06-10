/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Checkable.type';
import { forwardRef } from 'react';

export type CheckableProps = Props;

export const makeCheckable = (multiple: boolean) =>
  forwardRef<HTMLInputElement, Props>(
    ({ className, ...rest }: Props, ref): JSX.Element => {
      const { applyStyles } = useProviderContext();

      const [{ css, ...nextProps }, Element] = applyStyles(
        { element: 'span', multiple, ...rest },
        multiple ? 'Checkbox' : 'Radio',
      );

      return (
        <Element className={className} css={css}>
          <input {...nextProps} ref={ref} type={multiple ? 'checkbox' : 'radio'} />
          <span />
        </Element>
      );
    },
  );
