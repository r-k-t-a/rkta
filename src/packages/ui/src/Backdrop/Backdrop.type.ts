import { RktaElement } from '../Provider/theme';

export type Align = {
  align?:
    | 'center'
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left'
    | 'left';
};

export type BackdropProps = Align &
  RktaElement & {
    onClick?(): void;
    opacity?: number;
    onFadeOut?(): void;
    visible?: boolean;
  };
