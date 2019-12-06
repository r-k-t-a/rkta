/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, ReactElement, Fragment } from 'react';

import { Props } from './AccordionPannel.type';
import { useProviderContext } from '../Provider';
import { Button } from '../Button';

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
  const { applyStyles } = useProviderContext();

  const [contentProps, Content] = applyStyles(
    {
      animateHeight: true,
      element: 'dd',
      visible: active,
    },
    'ScrollBox',
    'Paper',
    'Text',
  );

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
      <Content {...contentProps}>{children}</Content>
    </Fragment>
  );
};
