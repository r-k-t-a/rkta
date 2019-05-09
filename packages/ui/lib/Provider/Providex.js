"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
;
class Counter extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            count: 0
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("button", null, "Increment")));
    }
}
exports.default = Counter;
//# sourceMappingURL=Providex.js.map