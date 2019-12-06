/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, ReactElement, Fragment } from 'react';

import { Props } from './AccordionPannel.type';
import { Button } from '../Button';
import { ScrollBox } from '../ScrollBox';

const buttonCss = {
  marginBottom: 1,
};

/* eslint-disable react/jsx-fragments */
export const AccordionPannel: SFC<Props> = ({
  active,
  children,
  label,
  ...rest
}: Props): ReactElement => {
  return (
    <Fragment>
      <Button
        bgColor="paper3"
        hard
        css={buttonCss}
        element="dt"
        composition={['ListItem', 'Button', 'Addon', 'Paper', 'Text']}
        className={active ? 'active' : undefined}
        {...rest}
      >
        {label}
      </Button>
      <ScrollBox animateHeight element="dd" visible={active}>
        {children}
      </ScrollBox>
    </Fragment>
  );
};
