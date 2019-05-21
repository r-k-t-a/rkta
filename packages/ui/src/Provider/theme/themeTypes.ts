import { FontStyleInterface } from '../../Font/Font.types';

export type StylesKeyType = string | object | undefined;

export interface StylesInterface {
  [key: string]: StylesKeyType;
}

export interface ColorInterface extends StylesInterface {
  primary: string;
  primary1: string;
  primary2: string;

  secondary: string;
  secondary1: string;

  text: string;
  divider: string;

  paper: string;
  paper1: string;
  paper2: string;
  paper3: string;

  success: string;
  warning: string;

  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  color15: string;
  color16: string;
  [key: string]: string;
}

export interface ThemeInterface {
  color: ColorInterface;
  Font: StylesInterface & FontStyleInterface;
  [key: string]: StylesInterface;
}
