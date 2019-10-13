export { color } from '../Text/Text.styles';
export const initialStyle = {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
};
export const fancy = (theme, props) => ({
    position: 'relative',
    '&:before': {
        backgroundColor: 'currentColor',
        bottom: 0,
        content: '""',
        display: 'block',
        height: 1,
        left: 0,
        right: 0,
        opacity: 0.48,
        position: 'absolute',
    },
    '&:after': {
        backgroundColor: 'currentColor',
        bottom: 0,
        content: '""',
        display: 'block',
        height: 2,
        left: 0,
        right: 0,
        position: 'absolute',
        transform: `scaleX(${props.active ? 1 : 0})`,
        transition: 'transform 0.32s ease',
    },
});
//# sourceMappingURL=Input.styles.js.map