/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Ref } from 'react';

import { useProviderContext } from '../Provider';
import { Text } from '../Text';
import { InputElement, Props } from './InputBase.type';
import { useAutoHeight } from './useAutoHeight';

export type InputBaseProps = Props;

export const InputBase = forwardRef<InputElement, Props>(
  ({ active, autoHeight, caption, multiline, value, ...rest }: Props, ref): JSX.Element => {
    const { applyStyles } = useProviderContext();
    const styledProps = {
      normal: true,
      ...rest,
      active,
      element: 'span',
      main: true,
      multiline,
    };
    const [{ css, ...inputProps }, WrapperElement] = applyStyles(styledProps, 'InputBase', 'Addon');
    const elementProps = useAutoHeight(autoHeight && multiline, value);

    return (
      <WrapperElement {...elementProps} css={css}>
        {caption && (
          <Text caption={active} body={!active} className="caption" nowrap>
            {caption}
          </Text>
        )}
        {multiline ? (
          <textarea {...inputProps} ref={ref as Ref<HTMLTextAreaElement>} value={value} />
        ) : (
          <input {...inputProps} ref={ref as Ref<HTMLInputElement>} value={value} />
        )}
      </WrapperElement>
    );
  },
);
