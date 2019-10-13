import { CssEmotion, CssRkta, RktaTheme } from '../Provider/theme/theme.type';
import { Props as Button } from './Button.type';
export declare const initialStyle: CssEmotion;
export declare const blockLevel: CssEmotion;
export declare const busy: CssEmotion;
export declare const color: (theme: RktaTheme, props: {
    color: string;
}) => CssRkta;
export declare const round: (theme: RktaTheme, props: Button) => import("@emotion/core").InterpolationWithTheme<any>;
export declare const size: (theme: RktaTheme, props: Button) => import("@emotion/core").InterpolationWithTheme<any>;
export declare const spinnerCss: {};
//# sourceMappingURL=Button.styles.d.ts.map