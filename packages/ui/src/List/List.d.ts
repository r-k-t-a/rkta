import { PaperProps } from '../Paper/Paper.d';

export interface ListProps extends PaperProps {
  fitAll?: boolean;
  fitTop?: boolean;
  fitBottom?: boolean;
}
