/** @jsx jsx */
import { SFC, ReactNode, ElementType, ReactElement } from 'react';
import { jsx } from '@emotion/core';
import { CssType } from '../util/themedTypes';

interface AtomProps {
  /** React ref object. */
  atomRef?: object;
  /** Css string, Css object, array or function. */
  css?: CssType;
  children?: ReactNode;
  /** React element or string. */
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
