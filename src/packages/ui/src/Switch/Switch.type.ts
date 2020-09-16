import { Color } from '../Provider/theme';
import { CheckableElement } from '../makeCheckable';

export type SwitchProps = {
  color?: Color | string;
  padding?: string;
  ratio?: number;
  size?: string;
} & Omit<CheckableElement, 'size'>;
