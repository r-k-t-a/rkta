/** @jsx jsx */
import { SFC, ReactNode, ElementType, ReactElement } from 'react';
import { jsx } from '@emotion/core';

interface AtomProps {
  atomRef?: object;
  css?: Function | object;
  children?: ReactNode;
  element?: ElementType;
}

const Atom: SFC<AtomProps> = ({
  atomRef,
  children,
  css,
  element: Element,
  ...rest
}: AtomProps): ReactElement => (
  <Element {...rest} css={css} ref={atomRef}>
    {children}
  </Element>
);

Atom.defaultProps = {
  atomRef: null,
  css: null,
  children: null,
  element: 'div',
};

export default Atom;
