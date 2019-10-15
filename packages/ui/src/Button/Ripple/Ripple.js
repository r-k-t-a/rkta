import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { BoxCss } from './Ripple.styles';
import { Wave } from './Wave';
import { Overlay } from './Overlay';
import { getElement } from '../../Provider/getElement';
export const Ripple = ({ mouseover, overlayIsVisible, onOverlayAnimationEnd, onWaveDissolve, waves, }) => {
    const hasWaves = waves.length > 0;
    const WavesWrapElement = getElement('span', {});
    return (jsx(Fragment, null,
        (overlayIsVisible || hasWaves) && (jsx(Overlay, { mouseover: mouseover, onOverlayAnimationEnd: onOverlayAnimationEnd })),
        hasWaves && (jsx(WavesWrapElement, { css: BoxCss }, waves.map((wave) => (jsx(Wave, Object.assign({ key: wave.id }, wave, { onWaveDissolve: onWaveDissolve }))))))));
};
//# sourceMappingURL=Ripple.js.map