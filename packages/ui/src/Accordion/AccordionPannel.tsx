/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, ReactElement, Fragment } from 'react';

import { Props } from './AccordionPannel.type';
import { Addon } from '../Addon';
import { ListButton } from '../List';
import { ScrollBox } from '../ScrollBox';
import { ChevronDownIcon } from '../util/ChevronDownIcon';

/* eslint-disable react/jsx-fragments */
export const AccordionPannel: SFC<Props> = ({
  active,
  children,
  label,
  ...rest
}: Props): ReactElement => {
  return (
    <Fragment>
      <ListButton hard element="dt" className={active ? 'active' : undefined} {...rest}>
        <Addon main>{label}</Addon>
        <Addon>
          <ChevronDownIcon className="chevron" />
        </Addon>
      </ListButton>
      <ScrollBox animateHeight element="dd" visible={active}>
        {children}
      </ScrollBox>
    </Fragment>
  );
};
