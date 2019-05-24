/** @jsx jsx */
import { SFC, ReactNode, ElementType, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { CssEmotion } from '../Provider/theme/theme.types';

interface AtomProps {
  /** React ref object. */
  atomRef?: object;
  /** Css string, Css object, array or function. */
  css?: CssEmotion;
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
