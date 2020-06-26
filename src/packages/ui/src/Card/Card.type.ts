import { PaperProps } from '../Paper/Paper.type';
import { TextProps } from '../Text/Text.type';
// import { RktaElement } from '../Provider/theme/theme.type';

export type CardProps = PaperProps & Omit<TextProps, 'size'> & {};
