export type MediaTuple = number[];

export interface MediaTuples {
  phone: MediaTuple;
  tablet: MediaTuple;
  laptop: MediaTuple;
  desktop: MediaTuple;
  jumbotron: MediaTuple;
  atLeastPhone: MediaTuple;
  atLeastTablet: MediaTuple;
  atLeastLaptop: MediaTuple;
  atLeastDesktop: MediaTuple;
  atLeastJumbotron: MediaTuple;
  atMostPhone: MediaTuple;
  atMostTablet: MediaTuple;
  atMostLaptop: MediaTuple;
  atMostDesktop: MediaTuple;
  atMostJumbotron: MediaTuple;
  [key: string]: MediaTuple;
}
