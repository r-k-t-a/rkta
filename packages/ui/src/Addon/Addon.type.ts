import { Props as Text } from '../Text/Text.type';

export interface AddonOwnProps {
  big?: boolean;
  /** Reset Paddings */
  fitAll?: boolean;
  /** Reset Left Padding */
  fitLeft?: boolean;
  /** Reset Right Padding */
  fitRight?: boolean;
  huge?: boolean;
  inset?: boolean;
  main?: boolean;
  normal?: boolean;
  paddingX?: number | string;
  paddingY?: number | string;
  small?: boolean;
  tiny?: boolean;
}

export interface Props extends AddonOwnProps, Text {}
