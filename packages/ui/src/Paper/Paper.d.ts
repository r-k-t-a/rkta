import { TextProps } from '../Text/Text.defs';
import { Color } from '../Provider/theme/theme.defs';

export interface PaperOwnProps {
  bgColor?: Color;
  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  outline?: number | string;
  outlineColor?: Color;
  readOnly?: boolean;
  relative?: boolean;
  rize?: number;
  round?: boolean;
  rounded?: boolean;
  size?: number | string;
  transparent?: boolean;
}

export default interface Paper extends PaperOwnProps, TextProps {}
