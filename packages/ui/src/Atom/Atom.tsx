/** @jsx jsx */
import { ReactElement, SFC, useContext } from 'react';
import { jsx } from '@emotion/core';

import Context from '../Provider/Context';

import { AtomProps } from './Atom.d';

const Atom: SFC<AtomProps> = ({
  atomRef,
  children,
  css,
  element = 'div',
  ...rest
}: AtomProps): ReactElement => {
  const { getElement } = useContext(Context);
  const Element = getElement(element, rest);
  return (
    <Element {...rest} css={css} ref={atomRef}>
      {children}
    </Element>
  );
};

Atom.defaultProps = {
  children: null,
  element: 'div',
};

export default Atom;
