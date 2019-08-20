/** @jsx jsx */
import { ReactElement, SFC, useContext } from 'react';
import { jsx } from '@emotion/core';

import Context from '../Provider/Context';
import { RktaElement } from '../Provider/theme/theme.defs';

const Atom: SFC<RktaElement> = ({
  children,
  css,
  element = 'div',
  ...rest
}: RktaElement): ReactElement => {
  const { getElement } = useContext(Context);
  const Element = getElement(element, rest);
  return (
    <Element {...rest} css={css}>
      {children}
    </Element>
  );
};

Atom.defaultProps = {
  children: null,
  element: 'div',
};

export default Atom;
