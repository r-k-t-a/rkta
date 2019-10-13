import { ReactElement, ReactNode } from 'react';

export interface Props {
  children: ReactElement | ReactElement[];

  phone?: boolean;
  tablet?: boolean;
  laptop?: boolean;
  desktop?: boolean;
  jumbotron?: boolean;
  atLeastPhone?: boolean;
  atLeastTablet?: boolean;
  atLeastLaptop?: boolean;
  atLeastDesktop?: boolean;
  atLeastJumbotron?: boolean;
  atMostPhone?: boolean;
  atMostTablet?: boolean;
  atMostLaptop?: boolean;
  atMostDesktop?: boolean;
  atMostJumbotron?: boolean;

  [key: string]: ReactNode;
}

export type EntriesType = string[][];

export interface UseMediaResult {
  phone: boolean | null;
  tablet: boolean | null;
  laptop: boolean | null;
  desktop: boolean | null;
  jumbotron: boolean | null;
  atLeastPhone: boolean | null;
  atLeastTablet: boolean | null;
  atLeastLaptop: boolean | null;
  atLeastDesktop: boolean | null;
  atLeastJumbotron: boolean | null;
  atMostPhone: boolean | null;
  atMostTablet: boolean | null;
  atMostLaptop: boolean | null;
  atMostDesktop: boolean | null;
  atMostJumbotron: boolean | null;
}
