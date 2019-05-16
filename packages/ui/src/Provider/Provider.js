"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const emotion_theming_1 = require("emotion-theming");
const merge_1 = require("lodash/merge");
const defaultTheme_1 = require("./theme/defaultTheme");
const Context_1 = require("./Context");
class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: merge_1.default(defaultTheme_1.default, this.props.theme),
        };
    }
    render() {
        const { theme } = this.state;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: theme },
            React.createElement(Context_1.default.Provider, { value: { theme } }, this.props.children)));
    }
}
exports.default = Provider;
//# sourceMappingURL=Provider.js.map