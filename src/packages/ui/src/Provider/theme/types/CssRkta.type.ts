import { InterpolationWithTheme } from '@emotion/core';
import { RktaTheme } from '../mountTheme/mountTheme.type';
import { CssEmotion } from './CssEmotion.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CssGetter = (theme: RktaTheme, props: any) => InterpolationWithTheme<any>;
export type CssRkta = CssEmotion | CssGetter;
