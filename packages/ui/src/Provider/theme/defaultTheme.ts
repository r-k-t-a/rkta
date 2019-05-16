import color from './colors';

interface Colors {
  primary: string;
  // [prop: string]: string;
}

export interface ThemeInterface {
  color: Colors;
}

export default {
  color: {
    primary: '#FADC4F',
  },
};
