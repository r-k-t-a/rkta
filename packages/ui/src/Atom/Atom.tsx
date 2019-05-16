/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';

interface AtomProps {
  atomRef?: Function | object;
  css?: Function | object;
  children?: React.ReactNode;
  element: React.ElementType;
}

const Atom: React.SFC<AtomProps> = ({
  css,
  element: Element = 'div',
  atomRef,
  ...rest
}: AtomProps): React.ReactElement => <Element {...rest} css={css} ref={atomRef} />;

export default Atom;
