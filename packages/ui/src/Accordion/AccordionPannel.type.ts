import { ReactNode } from 'react';
import { Props as ListButton } from '../List/ListButton/ListButton.type';

export interface AccordionPannelOwnProps {
  active?: boolean;
  label: ReactNode;
}

export interface Props extends AccordionPannelOwnProps, ListButton {}
