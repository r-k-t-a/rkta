import { Props as Text } from '../Text/Text.type';
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

type OmitColor = Omit<Text, 'color'>;

export type Props = PaperOwnProps & Omit<OmitColor, 'size'> & {};
