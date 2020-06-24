import { RktaDefaultTheme } from '../defaultTheme';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';

export type RktaTheme = RktaDefaultTheme & {
  media: MediaQueries;
  mediaTuples: MediaTuples;
};
