import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Drawer.type';

export const align = (theme: RktaTheme, props: Props): SerializedStyles => {
  switch (props.align) {
    case 'bottom':
    case 'top':
      return css`
        width: 100%;
      `;
    default:
      return css`
        height: 100%;
      `;
  }
};
