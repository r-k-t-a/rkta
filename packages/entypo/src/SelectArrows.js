import React from 'react';
import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';
const SelectArrows = (props) => (React.createElement(Svg, Object.assign({ size: defaultIconSize }, props, { viewBox: "0 0 20 20" }),
    React.createElement("path", { d: "M10,1L5,8h10L10,1z M10,19l5-7H5L10,19z" })));
export default SelectArrows;
//# sourceMappingURL=SelectArrows.js.map