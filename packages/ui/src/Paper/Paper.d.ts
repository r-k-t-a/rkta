import { TextProps } from '../Text/Text.d';

export interface PaperProps extends TextProps {
  bgColor?: string;
  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  readOnly?: boolean;
  relative?: boolean;
  rize?: number;
  round?: boolean;
  rounded?: boolean;
  size?: number | string;
  transparent?: boolean;
}
