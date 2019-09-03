import { ReactNode } from 'react';

export interface MediaProps {
  children: ReactNode;

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
  atMost$Phone?: boolean;
  atMost$Tablet?: boolean;
  atMost$Laptop?: boolean;
  atMost$Desktop?: boolean;
  atMost$Jumbotron?: boolean;

  [key: string]: string | ReactNode;
}
