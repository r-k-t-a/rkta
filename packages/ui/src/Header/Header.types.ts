import { RktaThemed, CssEmotion } from '../Provider/theme/theme.types';

export default interface HeaderProps extends RktaThemed {
  children?: React.ReactNode;
  css?: CssEmotion;

  level?: number;
}
