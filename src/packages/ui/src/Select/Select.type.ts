import { ReactNode, HTMLProps, ReactChildren } from 'react';
import { PaperOwnProps } from '../Paper/Paper.type';
import { DrawerProps } from '../Drawer';
import { FloatingAreaProps } from '../FloatingArea';
import { PaperProps } from '../Paper';

type Input = Pick<HTMLProps<HTMLInputElement>, 'value' | 'defaultValue'>;
type Value = Input['value'];

type ChildrenArgs = [(value: Value) => boolean, (value: Value) => void];
type Children = (args: ChildrenArgs) => ReactNode;

export type SelectProps = PaperOwnProps &
  Input & {
    active?: boolean;
    caption?: ReactNode;
    children: ReactChildren | JSX.Element | Children;
    drawerProps?: DrawerProps & { open: never; onClose: never };
    floatingAreaProps?: FloatingAreaProps & { active: never; onClose: never; producer: never };
    floatingAreaContentProps?: PaperProps;
    formatValue?: (value: Value) => ReactNode;
    main?: boolean;
    onChange?: (value: Value) => void;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    prepend?: ReactNode;
    size?: never;
  };

export type SelectState = {
  isOpen: boolean;
  value?: Value;
};
