/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, ReactElement, Children, cloneElement, useState, SyntheticEvent } from 'react';

import { Props } from './Accordion.type';
import { useProviderContext } from '../Provider';

export const Accordion: SFC<Props> = ({ children, index, ...rest }: Props): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(index);
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'dl', ...rest }, 'List', 'Paper', 'Text');

  const makeClickHandler = (currentIndex: number) => (event: SyntheticEvent): void => {
    event.stopPropagation();
    setActiveIndex(currentIndex !== activeIndex ? currentIndex : null);
  };

  return (
    <Element {...nextProps}>
      {Children.map(children as ReactElement, (child, key) =>
        cloneElement(child, {
          active: key === activeIndex,
          onClick: makeClickHandler(key),
        }),
      )}
    </Element>
  );
};
