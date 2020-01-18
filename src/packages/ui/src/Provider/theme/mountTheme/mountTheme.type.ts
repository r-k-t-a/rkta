import { RktaDefaultTheme } from '../defaultTheme';
import { MediaQueries } from '../mediaQueries';
import { MediaTuples } from '../mediaTuples';

export interface RktaTheme extends RktaDefaultTheme {
  media: MediaQueries;
  mediaTuples: MediaTuples;
}
