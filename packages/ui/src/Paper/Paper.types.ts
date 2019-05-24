import React from 'react';
import { RktaThemed, CssEmotion } from '../Provider/theme/theme.types';

export default interface FontProps extends RktaThemed {
  children?: React.ReactNode;
  css?: CssEmotion;
  element?: React.ElementType;

  size?: number;
  rize?: number;

  clip?: boolean;
  disabled?: boolean;
  hardBottom?: boolean;
  hardLeft?: boolean;
  hardTop?: boolean;
  hardRight?: boolean;
  readOnly?: boolean;
  round?: boolean;
  rounded?: boolean;
  transparent?: boolean;
}
