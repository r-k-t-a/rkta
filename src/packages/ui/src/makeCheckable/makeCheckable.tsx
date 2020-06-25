/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { useProviderContext } from '../Provider';
import { CheckableProps } from './Checkable.type';

export const makeCheckable = (multiple: boolean) =>
  forwardRef<HTMLInputElement, CheckableProps>(
    ({ className, ...rest }: CheckableProps, ref): JSX.Element => {
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
