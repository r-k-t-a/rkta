import { jsx } from '@emotion/core';
import { useProviderContext } from '../../Provider';
import { Text } from '../../Text';
export const InputBase = ({ active, caption, value, onChange, ...rest }) => {
    const { applyStyles } = useProviderContext();
    const styledProps = {
        normal: true,
        ...rest,
        active,
        element: 'span',
        main: true,
    };
    const [{ css, ...inputProps }, Element] = applyStyles(styledProps, 'InputBase', 'Addon');
    return (jsx(Element, { css: css },
        caption && (jsx(Text, { caption: active, body: !active }, caption)),
        jsx("input", Object.assign({ type: "text" }, inputProps, { onChange: onChange, value: value }))));
};
export default InputBase;
//# sourceMappingURL=InputBase.js.map