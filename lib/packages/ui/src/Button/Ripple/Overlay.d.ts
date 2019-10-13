/// <reference types="@emotion/core" />
import { ReactElement } from 'react';
interface Props {
    mouseover: boolean;
    onOverlayAnimationEnd: Function;
}
declare const Overlay: ({ mouseover, onOverlayAnimationEnd }: Props) => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
export default Overlay;
//# sourceMappingURL=Overlay.d.ts.map