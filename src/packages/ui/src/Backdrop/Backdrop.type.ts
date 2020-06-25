import { RktaElement } from '../Provider/theme';

export type Align = {
  align?:
    | 'center'
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'right'
    | 'bottom'
    | 'bottomRight'
    | 'bottomLeft'
    | 'left';
};

export type BackdropProps = Align &
  RktaElement & {
    onClick?(): void;
    opacity?: number;
    onFadeOut?(): void;
    visible?: boolean;
  };
