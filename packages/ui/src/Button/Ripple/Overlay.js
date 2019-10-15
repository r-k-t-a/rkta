import { jsx } from '@emotion/core';
import { OverlayCss } from './Ripple.styles';
import { getElement } from '../../Provider/getElement';
export const Overlay = ({ mouseover, onOverlayAnimationEnd }) => {
    const Element = getElement('span', {});
    return jsx(Element, { css: OverlayCss(mouseover), onAnimationEnd: onOverlayAnimationEnd });
};
//# sourceMappingURL=Overlay.js.map