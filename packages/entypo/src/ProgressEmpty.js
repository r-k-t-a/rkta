import React from 'react';
import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';
const ProgressEmpty = (props) => (React.createElement(Svg, Object.assign({ size: defaultIconSize }, props, { viewBox: "0 0 20 20" }),
    React.createElement("path", { d: "M18,5H2C0.9,5,0,5.9,0,7v6c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C20,5.9,19.1,5,18,5z M18,13H2V7h16V13z" })));
export default ProgressEmpty;
//# sourceMappingURL=ProgressEmpty.js.map