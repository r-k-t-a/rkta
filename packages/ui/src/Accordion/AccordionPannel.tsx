/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, ReactElement, Fragment } from 'react';

import { Props } from './AccordionPannel.type';
import { useProviderContext } from '../Provider';
import { Button } from '../Button';

import useAnimation from './useAnimation';

const buttonCss = {
  marginBottom: 1,
};

/* eslint-disable react/jsx-fragments */
export const AccordionPannel: SFC<Props> = ({
  active,
  children,
  buttonContent,
  ...rest
}: Props): ReactElement => {
  const { visible, ...animationProps } = useAnimation(active || false);
  const { applyStyles } = useProviderContext();

  const [contentProps, Content] = applyStyles(
    {
      ...animationProps,
      animatedHeight: true,
      element: 'dd',
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
        {buttonContent}
      </Button>
      {visible && <Content {...contentProps}>{children}</Content>}
    </Fragment>
  );
};
