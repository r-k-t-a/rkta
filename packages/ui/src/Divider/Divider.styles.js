export function initialStyle(theme) {
    return {
        border: '0',
        height: '0',
        borderTop: `1px solid ${theme.color.divider}`,
        marginBottom: '8px',
        marginTop: '8px',
    };
}
export const dotted = {
    borderStyle: 'dotted',
};
export const fitAll = {
    margin: 0,
};
export const fitBottom = {
    marginBottom: 0,
};
export const fitTop = {
    marginTop: 0,
};
export const inset = {
    marginLeft: '72px',
};
export const invisible = {
    visibility: 'hidden',
};
export const horizontalSpace = (theme, props) => ({
    marginLeft: props.horizontalSpace,
    marginRight: props.horizontalSpace,
});
export const verticalSpace = (theme, props) => ({
    marginBottom: props.verticalSpace,
    marginTop: props.verticalSpace,
});
//# sourceMappingURL=Divider.styles.js.map