/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';

import { useProviderContext } from '../../Provider';
import { Text } from '../../Text';
import { Props } from './InputBase.type';

export const InputBase: SFC<Props> = ({
  active,
  caption,
  value,
  onChange,
  ...rest
}: Props): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const styledProps = {
    normal: true,
    ...rest,
    active,
    element: 'span',
    main: true,
  };
  const [{ css, ...inputProps }, Element] = applyStyles(styledProps, 'InputBase', 'Addon');
  return (
    <Element css={css}>
      {caption && (
        <Text caption={active} body={!active}>
          {caption}
        </Text>
      )}
      <input type="text" {...inputProps} onChange={onChange} value={value} />
    </Element>
  );
};
