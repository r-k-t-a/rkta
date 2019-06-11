/** @jsx jsx */
import { SFC, ReactNode, ElementType, ReactElement, useContext } from 'react';
import { jsx } from '@emotion/core';

import { CssEmotion, RktaThemed } from '../Provider/theme/theme.types';
import Context from '../Provider/Context';

export interface Props extends RktaThemed {
  /** React ref object. */
  atomRef?: object;
  /** Css string, Css object, array or function. */
  css?: CssEmotion;
  children?: ReactNode;
  /** React element or string. */
  element?: ElementType;
}

const Atom: SFC<Props> = ({
  atomRef,
  children,
  css,
  element = 'div',
  ...rest
}: Props): ReactElement => {
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
