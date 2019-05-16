"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const useProviderContext_1 = require("../Provider/useProviderContext");
function themed(name, Component) {
    return (_a) => {
        var { css } = _a, props = __rest(_a, ["css"]);
        const { theme } = useProviderContext_1.default();
        const thunk = (payload) => {
            if (typeof payload === 'function')
                return thunk(payload(theme, props));
            return payload;
        };
        const styles = theme[name] || {};
        const nextProps = {};
        const nextCss = [];
        const keys = Object.keys(props);
        for (let i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            const value = props[key];
            if (key in styles) {
                if (value === true)
                    nextCss.push(thunk(styles[key]));
            }
            else {
                nextProps[key] = value;
            }
        }
        if (css)
            nextCss.push(thunk(css));
        return React.createElement(Component, Object.assign({}, nextProps, { css: nextCss }));
    };
}
exports.default = themed;
//# sourceMappingURL=themed.js.map