import { Props as PaperProps } from '../Paper/Paper.type';
import { Props as TextProps } from '../Text/Text.type';
// import { RktaElement } from '../Provider/theme/theme.type';

export type Props = PaperProps & Omit<TextProps, 'size'> & {};
