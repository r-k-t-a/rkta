/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Checkable.type';

export type CheckableProps = Props;

export const makeCheckable = (multiple: boolean) => ({
  className,
  ...rest
}: Props): JSX.Element => {
  const { applyStyles } = useProviderContext();

  const [{ css, ...nextProps }, Element] = applyStyles(
    { element: 'span', multiple, ...rest },
    multiple ? 'Checkbox' : 'Radio',
  );

  return (
    <Element className={className} css={css}>
      <input {...nextProps} type={multiple ? 'checkbox' : 'radio'} />
      <span />
    </Element>
  );
};
