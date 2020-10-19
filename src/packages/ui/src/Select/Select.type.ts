import { ReactNode, HTMLProps, ReactChildren } from 'react';
import { PaperOwnProps } from '../Paper/Paper.type';
import { DrawerProps } from '../Drawer';
import { FloatingAreaProps } from '../FloatingArea';
import { PaperProps } from '../Paper';

type Input = HTMLProps<HTMLInputElement>;
type Value = Input['value'];

type ChildrenArgs = [(value: Value) => boolean, (value: Value) => void];
type Children = (args: ChildrenArgs) => ReactNode;

export type SelectProps = PaperOwnProps &
  Input & {
    active?: boolean;
    caption?: ReactNode;
    children: ReactChildren | Children;
    drawerProps?: DrawerProps & { open: never; onClose: never };
    floatingAreaProps?: FloatingAreaProps & { active: never; onClose: never; producer: never };
    floatingAreaContentProps?: PaperProps;
    formatValue?: (value: Value) => ReactNode;
    main?: boolean;
    prepend?: ReactNode;
    size?: never;
  };

export type SelectState = {
  isExpanded: boolean;
  value?: Value;
};
