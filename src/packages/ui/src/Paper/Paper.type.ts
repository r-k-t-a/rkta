import { TextProps } from '../Text/Text.type';
import { Color } from '../Provider/theme';

export type PaperOwnProps = {
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
};

type OmitColor = Omit<TextProps, 'color'>;

export type PaperProps = PaperOwnProps & Omit<OmitColor, 'size'>;
