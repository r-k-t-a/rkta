import { RktaTheme } from './theme';
import { Resolver } from './getElement.type';
import { useStylesFunctionType } from './useStyles';

export type Props = {
  /** Extends default theme. The property is not reactive, to modify theme at runtime, use replaceTheme method. */
  theme?: RktaTheme;
  /** Replace default element resolver */
  getElement: Resolver;
};

export type State = {
  modalQueue: symbol[];
  theme: RktaTheme;
};

export type Context = {
  addModal(symbol: symbol): void;
  applyStyles: useStylesFunctionType;
  getElement: Resolver;
  modal: symbol;
  removeModal(symbol: symbol): void;
  replaceTheme?: (nextTheme: RktaTheme) => void;
  theme: RktaTheme;
};
