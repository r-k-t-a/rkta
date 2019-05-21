import React, { SFC, ReactNode, ElementType, ReactElement } from 'react';
import { CssType } from '../Provider/theme/themedTypes';

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
  element: Element = 'div',
  ...rest
}: AtomProps): ReactElement => (
  <Element {...rest} css={css} ref={atomRef}>
    {children}
  </Element>
);

Atom.defaultProps = {
  children: null,
  element: 'div',
};

export default Atom;
