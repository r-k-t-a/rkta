import { Paper } from '../Paper/Paper.defs';

export default interface List extends Paper {
  fitAll?: boolean;
  fitTop?: boolean;
  fitBottom?: boolean;
}
