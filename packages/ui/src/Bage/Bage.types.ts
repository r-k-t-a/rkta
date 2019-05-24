import { RktaThemed, CssEmotion } from '../Provider/theme/theme.types';

export default interface BageProps extends RktaThemed {
  children: React.ReactNode;
  css?: CssEmotion;
  element?: React.ElementType;

  /** Reset Margins */
  fitAll?: boolean;
  /** Reset Left Margin */
  fitLeft?: boolean;
  /** Reset Right Margin */
  fitRight?: boolean;
}
