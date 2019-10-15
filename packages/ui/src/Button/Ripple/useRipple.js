import { useEffect, useState, } from 'react';
import { reEmit } from '../../util/reEmit';
const initialState = {
    focus: false,
    mouseover: false,
    overlayIsVisible: false,
    patched: 0,
    waves: [],
    touch: false,
};
const releaseWave = (wave) => ({ ...wave, released: true });
function releaseWaves(state, patchState) {
    const waves = state.waves.map(releaseWave);
    patchState({ ...state, waves });
}
function addWave({ width, height, pointX, pointY }, state, patchState) {
    const size = Math.max(width, height);
    const x = pointX;
    const y = pointY;
    const id = Date.now();
    const wave = { id, x, y, size, released: false };
    patchState({ ...state, waves: [...state.waves.map(releaseWave), wave] });
}
export const useRipple = ({ onBlur, onClick, onFocus, onMouseOver, onMouseOut, onPointerDown, onContextMenu, onTouchStart, }) => {
    const [state, setState] = useState(initialState);
    function patchState(payload) {
        setState({ ...state, ...payload, patched: Date.now() });
    }
    useEffect(() => {
        function handlePointerUp() {
            releaseWaves(state, patchState);
        }
        window.addEventListener('pointerup', handlePointerUp);
        return () => {
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [state.patched]);
    const buttonProps = {
        onBlur: (event) => {
            releaseWaves({ ...state, focus: false, mouseover: false }, patchState);
            reEmit(event, onBlur);
        },
        onClick: (event) => {
            releaseWaves(state, patchState);
            reEmit(event, onClick);
        },
        onContextMenu: (event) => {
            releaseWaves(state, patchState);
            reEmit(event, onContextMenu);
        },
        onFocus: (event) => {
            if (!state.focus) {
                const node = event.target;
                const { clientWidth: width, clientHeight: height } = node;
                const pointX = width / 2;
                const pointY = height / 2;
                addWave({ pointX, pointY, width, height }, { ...state, focus: true, mouseover: true }, patchState);
            }
            reEmit(event, onFocus);
        },
        onMouseOver: (event) => {
            patchState({ mouseover: true, overlayIsVisible: !state.touch });
            reEmit(event, onMouseOver);
        },
        onMouseOut: (event) => {
            patchState({ mouseover: false });
            reEmit(event, onMouseOut);
        },
        onPointerDown: (event) => {
            const { clientY, clientX } = event;
            const node = event.target;
            const { top, left, width, height } = node.getBoundingClientRect();
            const pointX = clientX - left;
            const pointY = clientY - top;
            addWave({ pointX, pointY, width, height }, { ...state, focus: true }, patchState);
            reEmit(event, onPointerDown);
        },
        onTouchStart: (event) => {
            patchState({ touch: true });
            reEmit(event, onTouchStart);
        },
    };
    function onOverlayAnimationEnd() {
        if (!state.mouseover)
            patchState({ overlayIsVisible: false });
    }
    function onWaveDissolve() {
        const [, ...waves] = state.waves;
        patchState({ waves });
    }
    const { mouseover, overlayIsVisible, waves } = state;
    const rippeProps = {
        mouseover,
        overlayIsVisible,
        waves,
        onOverlayAnimationEnd,
        onWaveDissolve,
    };
    return [rippeProps, buttonProps];
};
//# sourceMappingURL=useRipple.js.map