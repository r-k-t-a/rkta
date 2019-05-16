/** @jsx jsx */
import { ReactElement } from 'react';
import { jsx } from '@emotion/core';

interface AtomProps {
  atomRef?: Function | object;
  css?: Function | object;
  children?: React.ReactNode;
  element: React.ElementType;
}

const Atom = ({ css, element: Element = 'div', atomRef, ...rest }: AtomProps): ReactElement => (
  <Element {...rest} css={css} ref={atomRef} />
);

export default Atom;
