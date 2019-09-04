import { ReactElement } from 'react';

export interface MediaProps {
  children: ReactElement;

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

  [key: string]: boolean | ReactElement | undefined;
}
