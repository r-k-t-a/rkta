import { ListItemProps } from '../ListItem/ListItem.d';
import { ButtonProps } from '../../Button/Button.d';

export interface ListButtonProps extends ButtonProps, ListItemProps {
  BaseElement?: never;
}
