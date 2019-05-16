/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

interface AtomProps {
  atomRef?: Function | object;
  css?: Function | object;
  element: React.ElementType;
}

const Atom = ({ css, element: Element = 'div', atomRef, ...rest }: AtomProps): React.ReactNode => (
  <Element {...rest} css={css} ref={atomRef} />
);

Atom.displayName = 'Atom';

export const RawAtom = Atom;

export default Atom;
