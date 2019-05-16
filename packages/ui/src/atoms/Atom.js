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
const core_1 = require("@emotion/core");
const Atom = (_a) => {
    var { css, element: Element = 'div', atomRef } = _a, rest = __rest(_a, ["css", "element", "atomRef"]);
    return (core_1.jsx(Element, Object.assign({}, rest, { css: css, ref: atomRef })));
};
Atom.displayName = 'Atom';
exports.RawAtom = Atom;
exports.default = Atom;
//# sourceMappingURL=Atom.js.map