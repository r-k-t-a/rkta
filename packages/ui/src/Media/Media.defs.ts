import { ReactElement } from 'react';

export interface MediaKeys {
  phone?: boolean | null;
  tablet?: boolean | null;
  laptop?: boolean | null;
  desktop?: boolean | null;
  jumbotron?: boolean | null;
  atLeastPhone?: boolean | null;
  atLeastTablet?: boolean | null;
  atLeastLaptop?: boolean | null;
  atLeastDesktop?: boolean | null;
  atLeastJumbotron?: boolean | null;
  atMostPhone?: boolean | null;
  atMostTablet?: boolean | null;
  atMostLaptop?: boolean | null;
  atMostDesktop?: boolean | null;
  atMostJumbotron?: boolean | null;
}

export interface MediaProps extends MediaKeys {
  children: ReactElement;
  [key: string]: boolean | ReactElement | undefined | null;
}

export type EntriesType = string[][];
