import { PaperProps } from '../Paper/Paper.type';

export type ListProps = PaperProps & {
  fitAll?: boolean;
  fitTop?: boolean;
  fitBottom?: boolean;
};
