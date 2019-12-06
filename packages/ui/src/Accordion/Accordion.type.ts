import { Props as List } from '../List/List.type';

export interface AccordionOwnProps {
  index?: number | null;
}

export interface Props extends AccordionOwnProps, List {}
