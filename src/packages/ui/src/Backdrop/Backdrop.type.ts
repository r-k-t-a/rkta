import { RktaElement } from '../Provider/theme';

export interface Align {
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
}

export interface Props extends Align, RktaElement {
  onClick?(): void;
  opacity?: number;
  onFadeOut?(): void;
  visible?: boolean;
}
