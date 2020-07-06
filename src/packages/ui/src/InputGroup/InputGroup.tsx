/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { useProviderContext } from '../Provider';
import { InputGroupProps } from './InputGroup.type';

/**
 * ```js
 * import { InputGroup, Input, Button} from '@rkta/ui';
 *
 * <InputGroup rize={1}>
 *   <Input caption="Caption" hardRight main />
 *   <Button bgColor="primary" hardLeft>
 *     OK
 *   </Button>
 * </InputGroup>
 * ```
 */
export const InputGroup: FC<InputGroupProps> = ({ children, ...props }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [{ css, ...elementProps }, Element] = applyStyles(props, 'Paper', 'InputGroup');
  return (
    <Element {...elementProps} css={css}>
      {children}
    </Element>
  );
};
