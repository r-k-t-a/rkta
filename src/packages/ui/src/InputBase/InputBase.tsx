/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, forwardRef } from 'react';

import { useProviderContext } from '../Provider';
import { Text } from '../Text';
import { InputElement, Props } from './InputBase.type';
import { useAutoHeight } from './useAutoHeight';

export const InputBase: FC<Props> = forwardRef<InputElement, Props>(
  ({ active, autoheight, caption, multiline, value, ...rest }: Props, ref): JSX.Element => {
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
    const Input = multiline ? 'textarea' : 'input';
    const elementProps = useAutoHeight(autoheight && multiline, value);

    return (
      <WrapperElement {...elementProps} css={css}>
        {caption && (
          <Text caption={active} body={!active} className="caption" nowrap>
            {caption}
          </Text>
        )}
        <Input {...inputProps} ref={ref} value={value} />
      </WrapperElement>
    );
  },
);
