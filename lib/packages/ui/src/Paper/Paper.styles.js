import invariant from '../util/invariant';
export const initialStyle = (theme) => ({
    border: '0px solid currentColor',
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: theme.color.paper,
});
export const bgColor = (theme, props) => ({
    backgroundColor: theme.color[props.bgColor] || props.bgColor,
});
export const clip = {
    overflow: 'hidden',
};
export const disabled = {
    opacity: 0.4,
    pointerEvents: 'none',
    userSelect: 'none',
};
export const hard = {
    borderRadius: 0,
};
export const hardBottom = {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
};
export const hardLeft = {
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
};
export const hardTop = {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
};
export const hardRight = {
    borderBottomRightRadius: '0',
    borderTopRightRadius: '0',
};
export const outline = (theme, props) => ({
    borderWidth: props.outline,
});
export const outlineColor = (theme, props) => ({
    borderColor: theme.color[props.outlineColor] || props.outlineColor,
});
export const readOnly = {
    pointerEvents: 'none',
};
export const relative = {
    position: 'relative',
};
export const rize = (theme, props) => {
    const rizeBy = props.rize.toString();
    invariant(rizeBy in theme.shadow, `Key "${rizeBy}" does not exist in "theme.shadow".`);
    return { boxShadow: theme.shadow[rizeBy] };
};
export const round = {
    borderRadius: '50%',
};
export const rounded = {
    borderRadius: '9999vw',
};
export const size = (theme, props) => ({
    width: props.size,
    height: props.size,
});
export const transparent = {
    backgroundColor: 'transparent',
};
//# sourceMappingURL=Paper.styles.js.map