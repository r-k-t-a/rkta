import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { DrawerProps } from './Drawer.type';

export const align = (theme: RktaTheme, props: DrawerProps): SerializedStyles => {
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
