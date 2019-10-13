import { jsx } from '@emotion/core';
import { OverlayCss } from './Ripple.styles';
import { getElement } from '../../Provider/getElement';
const Overlay = ({ mouseover, onOverlayAnimationEnd }) => {
    const Element = getElement('span', {});
    return jsx(Element, { css: OverlayCss(mouseover), onAnimationEnd: onOverlayAnimationEnd });
};
export default Overlay;
//# sourceMappingURL=Overlay.js.map